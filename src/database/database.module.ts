import { Module } from '@nestjs/common';
import { SmsModule } from '@/database/sms/sms.module';
import { AccountsModule } from '@/database/accounts/accounts.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from '@/database/config/typeorm.config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    SmsModule,
    AccountsModule,
  ],
  exports: [SmsModule, AccountsModule],
})
export class DatabaseModule {}
