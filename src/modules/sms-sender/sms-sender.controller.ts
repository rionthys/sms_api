import { Controller, Post, Body } from '@nestjs/common';
import { RequestDataDto } from '@/shared/dto/request-data.dto';
import { MessageProcessingService } from './message-processing.service';

@Controller('sms')
export class SmsController {
  constructor(private messageProcessingService: MessageProcessingService) {}

  @Post()
  async handleMessages(@Body() requestData: RequestDataDto) {
    return await this.messageProcessingService.processMessages(requestData);
  }
}
