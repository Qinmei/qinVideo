import { UserStatus } from 'src/enums';
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
  id: string;

  @Column('varchar', { length: 50, unique: true })
  name: string;

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
  introduce: string;

  @Column('int', { default: 0 })
  money: number;

  @Column('int', { default: 0 })
  expired: number;

  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.Audit,
  })
  status: UserStatus;

  @Column('boolean', { default: false })
  admin: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
