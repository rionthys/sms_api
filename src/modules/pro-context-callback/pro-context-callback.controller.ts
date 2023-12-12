import { Controller, Post } from '@nestjs/common';
import { SendCallbackService } from './send-callback.service';

@Controller('callback')
export class ProContextController {
  constructor(private sendCallback: SendCallbackService) {}

  @Post()
  async handleMessages() {
    return await this.sendCallback.sendMessage();
  }
}
