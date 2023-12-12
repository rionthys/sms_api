import { Sms } from '@/shared/database/entities/sms.entity';
import { LoggerDto } from '../dto/logger.dto';

export interface IMessageLogger {
  logSms(loggerData: LoggerDto): Promise<Sms>;
}
