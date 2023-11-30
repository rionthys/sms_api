import { IsString, IsUUID, IsOptional } from 'class-validator';

export class MessageDto {
  @IsUUID()
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
