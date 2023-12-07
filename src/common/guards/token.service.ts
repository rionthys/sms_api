import { ITokenService } from './interfaces/token.interface';
import { Injectable } from '@nestjs/common';
import { AccountRepository } from '@/shared/database/repositories/accounts.repository';

@Injectable()
export class TokenService implements ITokenService {
  constructor(private accountsRepo: AccountRepository) {}

  async validateToken(token: string): Promise<boolean> {
    const account = await this.accountsRepo.findOneByWhere({
      token,
      active: true,
    });
    return !!account;
  }
}
