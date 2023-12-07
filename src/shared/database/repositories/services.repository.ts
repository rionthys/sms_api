import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere } from 'typeorm';
import { Service } from '../entities/service.entity';

@Injectable()
export class ServiceRepository {
  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>,
  ) {}

  async create(data: Partial<Service>): Promise<Service> {
    const account = this.serviceRepository.create(data);
    return this.serviceRepository.save(account);
  }

  async findOneByWhere(
    where: FindOptionsWhere<Service>,
  ): Promise<Service | null> {
    return await this.serviceRepository.findOne({ where });
  }
}
