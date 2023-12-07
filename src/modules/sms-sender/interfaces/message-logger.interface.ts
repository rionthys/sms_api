import { Sms } from '@/shared/database/entities/sms.entity';
import { BulkSmsResponse } from '../dto/bulk-sms-response.dto';
import { MessageDto } from '@/shared/dto/message.dto';
import { PostData } from '../dto/post-data.dto';

export interface IMessageLogger {
  success(postData: PostData, response: BulkSmsResponse): Promise<Sms>;

  error(account_id: number, message: MessageDto, error: any): Promise<Sms>;
}
