import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'briefNest',
    entities: [__dirname + '/../**/*.entity.js'],
    migrations: [__dirname + '/migration/**/*.js'],
    synchronize: false,
});