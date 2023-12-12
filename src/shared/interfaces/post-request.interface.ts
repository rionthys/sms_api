import { CallbackDataDto } from '@/modules/callback/dto/callback-data.dto';
import { PostDataDto } from '@/modules/sms-sender/dto/post-data.dto';

export interface IPostSending {
  sendMessage(data: PostDataDto | CallbackDataDto, url: string): Promise<any>;
}
