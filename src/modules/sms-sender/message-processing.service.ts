import { Injectable } from '@nestjs/common';
import { SmsResponseDto } from './dto/response-message.dto';
import { LoggerDto } from '../../shared/dto/logger.dto';
import { DataAggregationService } from './data-aggregation.service';
import { ResponseService } from './response.service';
import { RequestDataDto } from '@/shared/dto/request-data.dto';
import { MessageLoggerService } from '@/shared/services/logger.service';
import { PostRequestService } from '@/shared/services/post-request.service';
import { SidService } from '@/shared/services/unique-sid.service';
import { MessageDto } from '@/shared/dto/message.dto';
import { appConfig } from '@/config/app/config';

@Injectable()
export class MessageProcessingService {
  constructor(
    private dataAggregationService: DataAggregationService,
    private messageSendingService: PostRequestService,
    private messageLoggerService: MessageLoggerService,
    private responseService: ResponseService,
    private sidService: SidService,
  ) {}

  async processMessages(
    requestData: RequestDataDto,
  ): Promise<SmsResponseDto[]> {
    const account_id = await this.dataAggregationService.loadAccount(
      requestData.token,
    );
    const messagePromises = requestData.messages.map((message) =>
      this.processSingleMessage(message, account_id),
    );

    const results = await Promise.allSettled(messagePromises);
    return results.map((result, index) => {
      if (result.status === 'fulfilled') {
        return result.value;
      } else {
        const loggerData: LoggerDto = new LoggerDto({
          account_id: account_id,
          message: requestData.messages[index],
          error: result.reason,
        });
        this.messageLoggerService.logSms(loggerData);

        return this.responseService.createErrorResponse(
          requestData.messages[index],
          result.reason,
        );
      }
    });
  }

  private async processSingleMessage(
    message: MessageDto,
    account_id: number,
  ): Promise<SmsResponseDto> {
    if (
      message.sid &&
      !(await this.sidService.isSidUnique(message.sid, account_id))
    ) {
      throw new Error('SID is not unique for this account');
    }
    const postData = await this.dataAggregationService.aggregateData(
      message,
      account_id,
    );
    const response = await this.messageSendingService.sendMessage(
      postData,
      appConfig.bulkUrl,
    );
    const loggerData: LoggerDto = new LoggerDto({
      account_id: account_id,
      message: message,
      service: this.dataAggregationService.service,
      response: response,
    });
    this.messageLoggerService.logSms(loggerData);
    return this.responseService.createSuccessResponse(message, response);
  }
}
