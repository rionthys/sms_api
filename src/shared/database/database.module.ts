import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { databaseConfig } from '@/config/database/config';
import { Account } from './entities/account.entity';
import { Service } from './entities/service.entity';
import { Sms } from './entities/sms.entity';
import { AccountRepository } from './repositories/accounts.repository';
import { ServiceRepository } from './repositories/services.repository';
import { SmsRepository } from './repositories/sms-service.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    TypeOrmModule.forFeature([Account, Service, Sms]),
  ],
  providers: [AccountRepository, ServiceRepository, SmsRepository],
  exports: [TypeOrmModule, AccountRepository, ServiceRepository, SmsRepository],
})
export class DatabaseModule {}
