import { MessageDto } from '@/shared/dto/message.dto';
import { PostDataDto } from '../dto/post-data.dto';
import { Service } from '@/shared/database/entities/service.entity';

export interface IDataAggregation {
  service: Service | null;
  loadAccount(token: string): Promise<number>;
  aggregateData(message: MessageDto, accountId: number): Promise<PostDataDto>;
}
