import { DataSource } from 'typeorm';
import { Init1778060668786 } from './migration/1778060668786-Init';
import { User } from './modules/user/entities/user.entity';
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1234',
  database: 'briefNest',
  entities: [User],
  migrations: [Init1778060668786],
  synchronize: false,
});
