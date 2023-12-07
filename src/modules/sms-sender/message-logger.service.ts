import { Injectable } from '@nestjs/common';
import { SmsRepository } from '@/shared/database/repositories/sms-service.repository';
import { Sms } from '@/shared/database/entities/sms.entity';
import { IMessageLogger } from './interfaces/message-logger.interface';
import { MessageDto } from '@/shared/dto/message.dto';
import { PostData } from './dto/post-data.dto';
import { BulkSmsResponse } from './dto/bulk-sms-response.dto';

@Injectable()
export class MessageLoggerService implements IMessageLogger {
  constructor(private smsRepo: SmsRepository) {}

  public async success(
    postData: PostData,
    response: BulkSmsResponse,
  ): Promise<Sms> {
    const mesData = {
      sid: postData.PID,
      nrid: response.NRID,
      service_id: postData.CRMCODE,
      phone: postData.DNIS,
      text: postData.BMess,
      alias: postData.Alias,
      send: true,
      log: response,
    };
    return await this.smsRepo.create(mesData);
  }

  public async error(
    account_id: number,
    message: MessageDto,
    error: Error,
  ): Promise<Sms> {
    const mesData = {
      ...(message.sid && { sid: message.sid }),
      ...(message.service && { service_id: message.service }),
      ...(message.from && { alias: message.from }),
      account_id: account_id,
      phone: message.to,
      text: message.text,
      log: {
        message: error.message,
        stack: error.stack,
      },
    };
    return await this.smsRepo.create(mesData);
  }
}
