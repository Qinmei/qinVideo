import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  methods: string;

  @Column()
  url: string;

  @Column()
  userAgent: string;

  @Column()
  ip: string;

  @Column()
  time: number;

  @CreateDateColumn()
  createdAt: number;
}
