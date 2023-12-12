import { SmsRepository } from '@/shared/database/repositories/sms-service.repository';
import { Injectable } from '@nestjs/common';
import { IUniqueSid } from '../interfaces/unique-sid.interface';

@Injectable()
export class SidService implements IUniqueSid {
  constructor(private smsRepository: SmsRepository) {}

  async isSidUnique(sid: string, accountId: number): Promise<boolean> {
    const existingService = await this.smsRepository.findOneByWhere({
      sid: sid,
      account_id: accountId,
    });
    return !existingService;
  }
}
