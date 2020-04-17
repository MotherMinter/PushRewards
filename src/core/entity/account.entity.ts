import { BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Company } from './company.entity';
import { Wallet } from './wallet.entity';
import { User } from './user.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created: Date;

  @Exclude()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  updated: Date;

  @Column({length: 512, nullable: true})
  email: string;

  @Exclude()
  @Column({length: 64, nullable: true})
  password: string;

  @ManyToOne(type => User, user => user.accounts)
  user: User;

  @BeforeUpdate()
  updateTimestamp() {
    this.updated = new Date();
  }
}
