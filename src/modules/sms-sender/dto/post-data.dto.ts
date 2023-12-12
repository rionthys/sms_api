import {
  IsString,
  IsOptional,
  IsNumberString,
  IsUUID,
  IsNumber,
} from 'class-validator';

export class PostDataDto {
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

  @IsNumber()
  CRMID: number;

  @IsString()
  BMess: string;
}
