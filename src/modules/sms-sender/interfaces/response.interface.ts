import { MessageDto } from '@/shared/dto/message.dto';
import { BulkSmsResponseDto } from '../dto/bulk-sms-response.dto';
import { SmsResponseDto } from '../dto/response-message.dto';

export interface IResponse {
  createSuccessResponse(
    message: MessageDto,
    response: BulkSmsResponseDto,
  ): SmsResponseDto;

  createErrorResponse(message: MessageDto, error: Error): SmsResponseDto;
}
