import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicesModule } from './services/services.module';
import { SmsModule } from './sms/sms.module';
import { AccountsModule } from './accounts/accounts.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [ServicesModule, SmsModule, AccountsModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
