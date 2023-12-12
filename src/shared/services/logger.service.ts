import { Injectable } from '@nestjs/common';
import { SmsRepository } from '@/shared/database/repositories/sms-service.repository';
import { Sms } from '@/shared/database/entities/sms.entity';
import { IMessageLogger } from '../interfaces/message-logger.interface';
import { LoggerDto } from '../dto/logger.dto';

@Injectable()
export class MessageLoggerService implements IMessageLogger {
  constructor(private smsRepo: SmsRepository) {}

  public async logSms(loggerData: LoggerDto): Promise<Sms> {
    console.log(loggerData);
    return await this.smsRepo.create(loggerData);
  }
}
