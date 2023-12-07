import { RequestDataDto } from '@/shared/dto/request-data.dto';
import { DataAggregationService } from './data-aggregation.service';
import { MessageLoggerService } from './message-logger.service';
import { MessageSendingService } from './message-sending.service';
import { ResponseService } from './response.service';
import { SmsResponse } from './dto/response-message.dto';
import { Injectable } from '@nestjs/common';
import { MessageDto } from '@/shared/dto/message.dto';

@Injectable()
export class MessageProcessingService {
  constructor(
    private dataAggregationService: DataAggregationService,
    private messageSendingService: MessageSendingService,
    private messageLoggerService: MessageLoggerService,
    private responseService: ResponseService,
  ) {}

  async processMessages(requestData: RequestDataDto): Promise<SmsResponse[]> {
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
        this.messageLoggerService.error(
          account_id,
          requestData.messages[index],
          result.reason,
        );
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
  ): Promise<SmsResponse> {
    const aggregatedData = await this.dataAggregationService.aggregateData(
      message,
      account_id,
    );
    const response =
      await this.messageSendingService.sendMessage(aggregatedData);
    this.messageLoggerService.success(aggregatedData, response);
    return this.responseService.createSuccessResponse(message, response);
  }
}
