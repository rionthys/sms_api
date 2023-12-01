import { Injectable } from '@nestjs/common';
import { AccountsService } from '@/database/accounts/accounts.service';

@Injectable()
export class AuthService {
  constructor(private accountsService: AccountsService) {}

  async validateToken(token: string): Promise<boolean> {
    const account = await this.accountsService.findByWhere({
      token,
      active: true,
    });
    if (!account) {
      return false;
    }
    return true;
  }
}
