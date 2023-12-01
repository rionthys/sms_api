import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Generated,
} from 'typeorm';
import { Account } from '@/database/accounts/entities/account.entity';
import { Sms } from '@/database/sms/entities/sms.entity';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true, default: '' })
  name?: string;

  @Column({ type: 'varchar', length: 50, nullable: true, default: '' })
  code?: string;

  @Column({ type: 'uuid', nullable: true })
  @Generated('uuid')
  token?: string;

  @Column()
  accountId: number;

  @Column()
  msid: number;

  @Column()
  is_main: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  login?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  password?: string;

  @Column({ type: 'varchar', length: 50, nullable: true, default: '' })
  alias?: string;

  @Column({ default: true })
  active?: boolean;

  @Column({ type: 'json', nullable: true })
  settings?: any;

  @Column({ type: 'varchar', length: 255, nullable: true, default: '' })
  notify_url?: string;
  @ManyToOne(() => Account, (account) => account.sms)
  account: Account;

  @OneToMany(() => Sms, (sms) => sms.service)
  sms: Sms[];
}
