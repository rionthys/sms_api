import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Account } from '@/shared/database/entities/account.entity';
import { ErrorResponse } from '@/shared/interfaces/error-response.interface';
import { BulkSmsResponse } from '@/modules/sms-sender/dto/bulk-sms-response.dto';

@Entity()
export class Sms {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'uuid', unique: true, default: () => 'uuid_generate_v4()' })
  sid?: string;

  @Column({ nullable: true })
  account_id?: number;

  @CreateDateColumn({ name: 'created_at' })
  created_at?: Date;

  @Column({ type: 'timestamp', nullable: true, name: 'delivered_at' })
  delivered_at?: Date;

  @Column({ nullable: true })
  nrid?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  service_id?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  phone?: string;

  @Column({ type: 'text', nullable: true })
  text?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  alias?: string;

  @Column({ default: false })
  send?: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  status?: string;

  @Column({ nullable: true })
  xml_id?: number;

  @Column({ default: 160, nullable: true })
  parts?: number;

  @Column({ type: 'json', nullable: true })
  log?: ErrorResponse | BulkSmsResponse;

  @Column({ type: 'varchar', length: 255, nullable: true, default: '' })
  callback_url?: string;

  @ManyToOne(() => Account, (account) => account.sms)
  @JoinColumn({ name: 'account_id' })
  account: Account;
}
