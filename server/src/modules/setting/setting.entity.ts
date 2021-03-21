import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class Setting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ nullable: true })
  @Exclude()
  token: string;

  @Column({ nullable: true })
  @Exclude()
  expired: number;

  @UpdateDateColumn()
  updatedAt: number;

  @CreateDateColumn()
  createdAt: number;
}
