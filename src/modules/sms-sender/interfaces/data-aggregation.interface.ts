import { MessageDto } from '@/shared/dto/message.dto';
import { PostData } from '../dto/post-data.dto';

export interface IDataAggregation {
  loadAccount(token: string): Promise<number>;
  aggregateData(message: MessageDto, accountId: number): Promise<PostData>;
}
