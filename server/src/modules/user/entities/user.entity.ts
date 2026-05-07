import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  constructor(username: string, email: string, password: string) {
    this.username = username ?? '';
    this.email = email ?? '';
    this.password = password ?? '';
  }
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column('varchar', { length: 100 })
  username: string;

  @Column('varchar', { length: 100 })
  email: string;

  @Column('varchar', { length: 100 })
  password: string;
}
