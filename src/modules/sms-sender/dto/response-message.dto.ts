import { ErrorResponse } from '@/shared/interfaces/error-response.interface';

export class SmsResponse {
  status: 'OK' | 'ERROR';
  to?: string;
  sid?: string;
  smsId?: string;
  error?: ErrorResponse;
}

export class SmsResultResponse {
  result: SmsResponse[];
}
