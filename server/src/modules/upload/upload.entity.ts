import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Upload {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  directory: string;

  @Column()
  hash: string;

  @Column()
  uuid: string;

  @Column()
  size: number;

  @Column()
  receive: string;

  @Column()
  status: string;

  @UpdateDateColumn()
  updatedAt: number;

  @CreateDateColumn()
  createdAt: number;
}
