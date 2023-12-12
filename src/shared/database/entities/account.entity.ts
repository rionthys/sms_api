import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Index,
} from 'typeorm';
import { Sms } from '@/shared/database/entities/sms.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name?: string;

  @Column({ type: 'uuid', unique: true, default: () => 'uuid_generate_v4()' })
  @Index()
  token?: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at?: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at?: Date;

  @Column({ type: 'boolean', default: true })
  active?: boolean;

  @Column({ type: 'timestamp', nullable: true, name: 'active_to' })
  active_to?: Date;

  @OneToMany(() => Sms, (sms) => sms.account)
  sms: Sms[];
}
