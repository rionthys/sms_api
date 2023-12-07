import { IsString, IsOptional } from 'class-validator';
import { IsStrictUuid } from '@/common/decorators/strict-uuid.decorator';

export class MessageDto {
  @IsStrictUuid({ message: 'Invalid UUID format' })
  @IsOptional()
  sid?: string;

  @IsString()
  @IsOptional()
  service?: string;

  @IsString()
  @IsOptional()
  from?: string;

  @IsString()
  to: string;

  @IsString()
  text: string;
}
