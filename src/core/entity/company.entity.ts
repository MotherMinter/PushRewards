import { BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { Warehouse } from './warehouse.entity';
import { Client } from './cilent.entity';
import { Project } from './project.entity';
import { Action } from './action.entity';

@Entity()
export class Company {
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

  @OneToOne(type => Warehouse, { eager: true })
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

  @OneToMany(type => Action, action => action.company, { eager: true })
  @JoinColumn()
  actions: Action[];

  @ManyToOne(type => Client)
  client: Client;

  @ManyToOne(type => Project, project => project.companies)
  project: Project;

  getParams() {
    return JSON.parse(this.params ?? '{}');
  }

  setParams(params) {
    this.params = JSON.stringify(params ?? {});
  }
}
