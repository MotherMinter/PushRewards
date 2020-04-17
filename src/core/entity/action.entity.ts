import { BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { Warehouse } from './warehouse.entity';
import { Client } from './cilent.entity';
import { Project } from './project.entity';
import { Company } from './company.entity';
import { User } from './user.entity';
import { Transaction } from './transaction.entity';

@Entity()
export class Action {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created: Date;

  @Exclude()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  updated: Date;

  @Column('text', {nullable: true})
  params: string;

  @Column('int')
  status: number;

  @Column({ length: 36 })
  uid: string;

  @ManyToOne(type => Client)
  client: Client;

  @BeforeUpdate()
  updateTimestamp() {
    this.updated = new Date();
  }

  @ManyToOne(type => Company, company => company.actions)
  company: Company;

  @ManyToOne(type => User, user => user.actions)
  user: User;

  @OneToMany(type => Transaction, tx => tx.action, { eager: true })
  @JoinColumn()
  transactions: Transaction[];

  getParams() {
    return JSON.parse(this.params ?? '{}');
  }

  setParams(params) {
    this.params = JSON.stringify(params ?? {});
  }
}
