import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Company } from './company.entity';
import { Exclude, Expose } from 'class-transformer';
import { User } from './user.entity';

@Exclude()
@Entity()
export class FingerPrint {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created: Date;

  @Expose({ name: 'fp' })
  @Column({ length: 32 })
  fingerprint: string;

  @ManyToOne(type => User, user => user.fingerPrints)
  user: User;
}
