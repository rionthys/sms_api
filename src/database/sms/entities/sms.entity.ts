import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Account } from '@/database/accounts/entities/account.entity';
import { Service } from '@/database/services/entities/service.entity';

@Entity()
export class Sms {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  sid?: number;

  @Column({ nullable: true })
  account_id?: number;

  @CreateDateColumn({ name: 'created_at' })
  created_at?: Date;

  @Column({ type: 'timestamp', nullable: true, name: 'delivered_at' })
  delivered_at?: Date;

  @Column({ nullable: true })
  nrid?: number;

  @Column({ nullable: true })
  service_id?: number;

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
  log?: any;

  @Column({ type: 'varchar', length: 255, nullable: true, default: '' })
  notify_url?: string;

  @ManyToOne(() => Account, (account) => account.sms)
  @JoinColumn({ name: 'account_id' })
  account: Account;

  @ManyToOne(() => Service, (service) => service.sms)
  @JoinColumn({ name: 'service_id' })
  service: Service;
}
