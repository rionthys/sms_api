import { Module } from '@nestjs/common';
import { SmsSenderModule } from './modules/sms-sender/sms-sender.module';

@Module({
  imports: [SmsSenderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
