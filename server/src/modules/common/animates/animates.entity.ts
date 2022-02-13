import { MediaStatus } from 'src/enums';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Animate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 50, unique: true })
  name: string;

  @Column('varchar', { length: 50, unique: true })
  slug: string;

  @Column('varchar', { nullable: true })
  cover: string;

  @Column('varchar', { nullable: true })
  description: string;

  @Column('boolean', { default: false })
  updating: boolean;

  @Column('varchar', { nullable: true })
  playTime: string;

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
