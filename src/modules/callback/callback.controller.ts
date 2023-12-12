import { Controller, Post, Body } from '@nestjs/common';
import { CallbackDataDto } from './dto/callback-data.dto';

@Controller('callback')
export class CallbackController {
  @Post()
  handleCallback(@Body() callbackDataDto: CallbackDataDto) {
    console.log(callbackDataDto);
  }
}
