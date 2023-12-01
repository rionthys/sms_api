import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from '@/database/accounts/entities/account.entity';
import { AccountsService } from '@/database/accounts/accounts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  providers: [AccountsService],
  exports: [AccountsService],
})
export class AccountsModule {}