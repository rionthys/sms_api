import { PostData } from '../dto/post-data.dto';
import { BulkSmsResponse } from '../dto/bulk-sms-response.dto';

export interface IMessageSending {
  sendMessage(postData: PostData): Promise<BulkSmsResponse>;
}
