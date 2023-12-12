import { IsString, IsInt, IsOptional, IsUUID } from 'class-validator';

export class BulkSmsResponseDto {
  @IsUUID()
  NRID: string;

  @IsInt()
  RStatus: number;

  @IsString()
  @IsOptional()
  ErrorMessage?: string;
}
