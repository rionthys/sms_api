import { BadRequestException, Injectable } from '@nestjs/common';
import { PostData } from './dto/post-data.dto';
import { IDataAggregation } from './interfaces/data-aggregation.interface';
import { MessageDto } from '@/shared/dto/message.dto';
import { AccountRepository } from '@/shared/database/repositories/accounts.repository';
import { ServiceRepository } from '@/shared/database/repositories/services.repository';
import { Service } from '@/shared/database/entities/service.entity';
import { appConfig } from '@/config/app/config';
import * as crypto from 'crypto';

@Injectable()
export class DataAggregationService implements IDataAggregation {
  private readonly CRMCODE = appConfig.CRMCODE;

  constructor(
    private accountRepo: AccountRepository,
    private serviceRepo: ServiceRepository,
  ) {}

  async loadAccount(token: string): Promise<number> {
    const account = await this.accountRepo.findOneByWhere({ token: token });
    if (!account)
      throw new BadRequestException(`No account with this token was found`);
    return account.id;
  }

  async aggregateData(
    message: MessageDto,
    account_id: number,
  ): Promise<PostData> {
    const service = await this.findService(message, account_id);
    const phash = this.getPhash(message?.sid + service.password + message.to);

    return {
      PID: message.sid,
      PHASH: phash,
      DNIS: message.sid,
      ANI: '',
      Alias: service.alias,
      Enc: 'UTF-8',
      CRMCODE: this.CRMCODE,
      CRMID: BigInt(service.id),
      BMess: message.text,
    };
  }

  private async findService(
    message: MessageDto,
    account_id: number,
  ): Promise<Service | null> {
    const code = message.service
      ? { code: message.service }
      : { is_main: true };
    const service = await this.serviceRepo.findOneByWhere({
      accountId: account_id,
      ...code,
      active: true,
    });

    return service;
  }

  private getPhash(input: string): string {
    return crypto.createHash('md5').update(input).digest('hex');
  }
}
