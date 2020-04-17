import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Company } from './company.entity';
import { Exclude, Expose } from 'class-transformer';
import { User } from './user.entity';
import { Action } from './action.entity';

@Exclude()
@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created: Date;

  @ManyToOne(type => Action, action => action.transactions)
  action: Action;

  @Column({ length: 66 })
  hash: string;
}
