import { BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Company } from './company.entity';
import { Project } from './project.entity';
import { Account } from './account.entity';
import { Client } from './cilent.entity';
import { Wallet } from './wallet.entity';
import { FingerPrint } from './fingerprint.entity';
import { Action } from './action.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created: Date;

  @Exclude()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  updated: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updated = new Date();
  }

  @OneToMany(type => FingerPrint, fp => fp.user, { eager: true })
  @JoinColumn()
  fingerPrints: FingerPrint[];

  @OneToMany(type => Account, account => account.user, { eager: true })
  @JoinColumn()
  accounts: Account[];

  @OneToOne(type => Wallet, wallet => wallet.user)
  @JoinColumn()
  wallet: Wallet;

  @OneToMany(type => Action, action => action.user, { eager: true })
  @JoinColumn()
  actions: Action[];
}
