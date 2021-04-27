import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50, unique: true })
  name: string;

  @Column('simple-array')
  authority: string[];

  @Column('varchar')
  description: string;

  @Column()
  status: string;
}
