import { Controller, Get, Post, Body } from '@nestjs/common';
import { RequestDataDto } from './dto/request-data.dto';
import { ResponseMessageDto } from './dto/response-message.dto';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.unauthorized();
  }

  @Post()
  handleRequest(@Body() requestData: RequestDataDto) {
    console.log('request');
    const response: ResponseMessageDto[] = requestData.messages.map((msg) => {
      return {
        status: 'OK',
        to: msg.to,
        sid: msg.sid,
        smsId: 'some-generated-id',
      };
    });

    return response;
  }
}
