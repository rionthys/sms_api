import { PostDataDto } from '../dto/post-data.dto';
import { BulkSmsResponseDto } from '../dto/bulk-sms-response.dto';

export interface IMessageSending {
  sendMessage(postData: PostDataDto): Promise<BulkSmsResponseDto>;
}
