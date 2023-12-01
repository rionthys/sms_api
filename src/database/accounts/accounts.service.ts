import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere } from 'typeorm';
import { Account } from '@/database/accounts/entities/account.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  async findByWhere(
    where: FindOptionsWhere<Account>,
  ): Promise<Account | undefined> {
    return this.accountRepository.findOne({ where });
  }
}
