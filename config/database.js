require('dotenv').config(); // Load .env variables

const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        dialectOptions: {
            ssl: {
                ca: fs.readFileSync(path.resolve(__dirname, '..', process.env.DB_CA_CERT_PATH)).toString()
            }
        },
        logging: false,
    }
);

module.exports = sequelize;