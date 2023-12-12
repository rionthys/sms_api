import { ErrorResponse } from '@/shared/interfaces/error-response.interface';

export class SmsResponseDto {
  status: 'OK' | 'ERROR';
  to?: string;
  sid?: string;
  smsId?: string;
  error?: ErrorResponse;
}

export class SmsResultResponseDto {
  result: SmsResponseDto[];
}
