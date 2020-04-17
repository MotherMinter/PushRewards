import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Company } from './company.entity';
import { Exclude, Expose } from 'class-transformer';
import { User } from './user.entity';

@Exclude()
@Entity()
export class Wallet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created: Date;

  @Expose({ name: 'uid' })
  @Column({ length: 64 })
  wallet: string;

  @Column({length: 42, nullable: true})
  mxaddress: string;

  @Expose()
  @Column('int')
  status: number;

  @OneToOne(type => User, user => user.wallet)
  user: User;
}
