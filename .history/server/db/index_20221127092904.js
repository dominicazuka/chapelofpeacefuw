const { Sequelize } = require('sequelize');
const {db_name, db_password, db_username} = require('../config')

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(db_name, db_username, db_password, {
  host: 'localhost',
  dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});