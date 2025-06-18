const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('your_db', 'user', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;