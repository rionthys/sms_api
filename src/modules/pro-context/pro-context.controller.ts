import { Controller, Post } from '@nestjs/common';

@Controller('pro-context')
export class ProContextController {
  constructor() {}

  @Post()
  async handleMessages() {
    return { NRID: '23030002-5B3F-40B3-A9A3-418C4417C0BB', RStatus: 0 };
  }
}
