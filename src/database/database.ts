import { Sequelize } from "sequelize";
import 'dotenv/config';

const port = process.env.MYSQL_PORT || 3000;
const user = process.env.MYSQL_USER || 'root';
const pass = process.env.MYSQL_PASS || 'root';
const host = process.env.MYSQL_HOST || 'localhost';
const dbName = process.env.MYSQL_DBNAME || 'DBname';

// Verificando que envie las variables de entorno
//console.log({ port, user, pass, host, dbName });

const sequelize = new Sequelize(dbName, user, pass, {
    dialect: 'mysql',
    port: Number(port),
    host: host,
});

const dbConnectMysql = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection successful.');
    } catch (error) {
        console.error('connection error:', error);
    }
};

export { sequelize, dbConnectMysql }