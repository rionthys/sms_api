import { Injectable } from '@nestjs/common';
import { SmsResponse } from './dto/response-message.dto';
import { BulkSmsResponse } from './dto/bulk-sms-response.dto';
import { MessageDto } from '@/shared/dto/message.dto';

@Injectable()
export class ResponseService {
  createSuccessResponse(
    message: MessageDto,
    response: BulkSmsResponse,
  ): SmsResponse {
    return {
      status: 'OK',
      to: message.to,
      sid: message.sid,
      smsId: response.NRID,
    };
  }

  createErrorResponse(message: MessageDto, error: Error): SmsResponse {
    return {
      status: 'ERROR',
      to: message.to,
      sid: message.sid ?? null,
      error: {
        message: error.message,
        stack: error.stack,
      },
    };
  }
}
