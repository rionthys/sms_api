import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ProContextController } from './pro-context-callback.controller';
import { SendCallbackService } from './send-callback.service';

@Module({
  imports: [HttpModule],
  controllers: [ProContextController],
  providers: [SendCallbackService],
})
export class ProContextCallbackModule {}
