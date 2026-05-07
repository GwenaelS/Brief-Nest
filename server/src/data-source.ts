import { DataSource } from 'typeorm';
import { Init1778060668786 } from './migration/1778060668786-Init';
import { User } from './modules/user/entities/user.entity';
import dotenv from 'dotenv';

dotenv.config()
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User],
  migrations: [Init1778060668786],
  synchronize: false,
});
