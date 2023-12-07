import { IsString, IsInt, IsOptional, IsUUID } from 'class-validator';

export class BulkSmsResponse {
  @IsUUID()
  NRID: string;

  @IsInt()
  RStatus: number;

  @IsString()
  @IsOptional()
  ErrorMessage?: string;
}
