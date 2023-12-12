import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Index,
} from 'typeorm';
import { Account } from '@/shared/database/entities/account.entity';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true, default: '' })
  name?: string;

  @Column({ type: 'varchar', length: 50, nullable: true, default: '' })
  code?: string;

  @Column({ type: 'uuid', unique: true, default: () => 'uuid_generate_v4()' })
  token?: string;

  @Index('idx_service_account_active', ['accountId', 'active'])
  @Column()
  accountId: number;

  @Column({ type: 'uuid', unique: true, default: () => 'uuid_generate_v4()' })
  msid: string;

  @Column({ type: 'bool', default: false })
  is_main: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  login?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  password?: string;

  @Column({ type: 'varchar', length: 50, nullable: true, default: '' })
  alias?: string;

  @Column({ type: 'bool', default: true })
  active?: boolean;

  @Column({ type: 'json', nullable: true })
  settings?: any;

  @Column({ type: 'varchar', length: 255, nullable: true, default: '' })
  callback_url?: string;

  @ManyToOne(() => Account, (account) => account.sms)
  account: Account;
}
