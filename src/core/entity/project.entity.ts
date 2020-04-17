import {
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { Wallet } from './wallet.entity';
import { Warehouse } from './warehouse.entity';
import { Account } from './account.entity';
import { Client } from './cilent.entity';
import { Company } from './company.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created: Date;

  @Exclude()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  updated: Date;

  @Column('text', {nullable: true})
  notice: string;

  @Column('text', {nullable: true})
  params: string;

  @Column('text', {nullable: true})
  apiKey: string;

  @OneToOne(type => Warehouse, { eager: true, })
  @JoinColumn()
  warehouseWallet: Warehouse;

  @Column('int')
  status: number;

  @Column({ length: 36 })
  uid: string;

  @BeforeUpdate()
  updateTimestamp() {
    this.updated = new Date();
  }

  @ManyToOne(type => Client, client => client.projects)
  client: Client;

  @OneToMany(type => Company, company => company.project, { eager: true })
  @JoinColumn()
  companies: Company[];

  getParams() {
    return JSON.parse(this.params ?? '{}');
  }

  setParams(params) {
    this.params = JSON.stringify(params ?? {});
  }
}
