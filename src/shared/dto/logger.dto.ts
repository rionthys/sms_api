import { MessageDto } from '@/shared/dto/message.dto';
import { IsNumber } from 'class-validator';
import { Service } from '@/shared/database/entities/service.entity';
import { BulkSmsResponseDto } from '@/modules/sms-sender/dto/bulk-sms-response.dto';
import { ErrorResponse } from '@/shared/interfaces/error-response.interface';

export class LoggerDto {
  @IsNumber()
  account_id: number;
  message: MessageDto;
  phone?: string;
  service_id?: string;
  NRID?: string | null;
  alias?: string | null;
  text?: string;
  log?: ErrorResponse | BulkSmsResponseDto;

  service?: Service | null;
  response?: BulkSmsResponseDto;
  error?: ErrorResponse;

  constructor(data: {
    account_id: number;
    message: MessageDto;
    service?: Service | null;
    response?: BulkSmsResponseDto;
    error?: ErrorResponse;
  }) {
    this.account_id = data.account_id;
    this.message = data.message;
    this.phone = data.message.to;
    this.text = data.message.text;
    this.NRID = data.response?.NRID ?? null;
    this.alias = data.service?.alias ?? null;
    this.service_id = data.service?.code ?? null;
    this.log = data.error ?? data.response;

    this.service = data.service;
    this.response = data.response;
    this.error = data.error;
  }
}
