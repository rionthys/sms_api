import { IsString, IsOptional, IsNumberString, IsUUID } from 'class-validator';

export class PostData {
  @IsUUID()
  PID: string;

  @IsString()
  PHASH: string;

  @IsString()
  @IsNumberString()
  DNIS: string;

  @IsString()
  @IsOptional()
  ANI: string;

  @IsString()
  @IsOptional()
  Alias: string;

  @IsString({ always: true })
  @IsOptional()
  Enc: string = 'UTF8';

  @IsString()
  CRMCODE: string;

  @IsNumberString()
  CRMID: bigint;

  @IsString()
  BMess: string;
}
