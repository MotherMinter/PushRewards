import { BeforeUpdate, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Company } from './company.entity';
import { Project } from './project.entity';

@Entity()
export class Client {
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

  @BeforeUpdate()
  updateTimestamp() {
    this.updated = new Date();
  }

  @OneToMany(type => Project, project => project.client, { eager: true, })
  @JoinColumn()
  projects: Project[];
}
