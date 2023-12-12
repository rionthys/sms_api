import { Module } from '@nestjs/common';
import { SmsSenderModule } from './modules/sms-sender/sms-sender.module';
import { ProContextModule } from './modules/pro-context-callback/pro-context-callback.module';

@Module({
  imports: [SmsSenderModule, ProContextModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
