import { IsUUID, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { MessageDto } from './message.dto';

export class RequestDataDto {
  @IsUUID()
  token: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MessageDto)
  messages: MessageDto[];
}
