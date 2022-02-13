import { Authority } from 'src/enums';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('varchar', { length: 50, unique: true })
  name: string;

  @Column('simple-array', { nullable: true })
  authority: Authority[];

  @Column('varchar', { nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
