import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Account } from '@/shared/database/entities/account.entity';
import { Service } from '@/shared/database/entities/service.entity';
import { Sms } from '@/shared/database/entities/sms.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'api_user',
  password: 'a5K69_7gS78b',
  database: 'sms_api',
  entities: [Account, Service, Sms],
  synchronize: true,
};
