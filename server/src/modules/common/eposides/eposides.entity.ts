import { MediaStatus } from 'src/enums';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Eposide {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 50, unique: true })
  name: string;

  @Column('int', { default: 0 })
  sort: number;

  @Column('varchar', { nullable: true })
  cover: string;

  @Column('simple-array', { nullable: true })
  preview: string[];

  @Column('varchar', { nullable: true })
  source: string;

  @Column('varchar', { nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: MediaStatus,
    default: MediaStatus.Draft,
  })
  status: MediaStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
