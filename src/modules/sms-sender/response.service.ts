import { Injectable } from '@nestjs/common';
import { SmsResponseDto } from './dto/response-message.dto';
import { BulkSmsResponseDto } from './dto/bulk-sms-response.dto';
import { MessageDto } from '@/shared/dto/message.dto';
import { PostDataDto } from './dto/post-data.dto';

@Injectable()
export class ResponseService {
  createSuccessResponse(
    message: MessageDto,
    response: BulkSmsResponseDto | PostDataDto,
  ): SmsResponseDto {
    let smsId = null;
    if ('NRID' in response) {
      smsId = response.NRID;
    }
    return {
      status: 'OK',
      to: message.to,
      sid: message.sid,
      smsId: smsId,
    };
  }

  createErrorResponse(message: MessageDto, error: Error): SmsResponseDto {
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
