import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('varchar', { length: 50, unique: true })
  username: string;

  @Column('varchar', { length: 50, unique: true })
  email: string;

  @Column('varchar', { length: 50 })
  password: string;

  @Column('varchar', { length: 50 })
  refreshToken: string;

  @Column('int', { default: 0 })
  level: number;

  @Column('int', { default: 0 })
  score: number;

  @Column('varchar', { nullable: true })
  avatar: string;

  @Column('varchar', { nullable: true })
  background: string;

  @Column('varchar', { nullable: true })
  description: string;

  @Column('int', { default: 0 })
  money: number;

  @Column('int', { default: 0 })
  expired: number;

  @Column()
  status: string;

  @CreateDateColumn()
  createdAt: Date;
  
  @UpdateDateColumn()
  updatedAt: Date;
}
