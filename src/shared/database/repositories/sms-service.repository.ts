import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere } from 'typeorm';
import { Sms } from '../entities/sms.entity';

@Injectable()
export class SmsRepository {
  constructor(
    @InjectRepository(Sms)
    private smsRepository: Repository<Sms>,
  ) {}

  async create(data: Partial<Sms>): Promise<Sms> {
    const account = this.smsRepository.create(data);
    return this.smsRepository.save(account);
  }

  async findOneByWhere(where: FindOptionsWhere<Sms>): Promise<Sms | null> {
    return await this.smsRepository.findOne({ where });
  }
}
