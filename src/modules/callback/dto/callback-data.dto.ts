import { IsString, IsDateString, IsInt, IsUUID } from 'class-validator';

export class CallbackDataDto {
  @IsUUID()
  NRID: string;

  @IsDateString()
  DDate: string;

  @IsString()
  DType: string;

  @IsInt()
  DStatus: number;

  @IsString()
  DMessage: string;
}
