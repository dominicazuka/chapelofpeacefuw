const { Sequelize, DataTypes } = require('sequelize')
const { db_name, db_password, db_username, db_host } = require('../config')

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(db_name, db_username, db_password, {
  host: db_host,
  dialect:
    'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
})

const UserModel = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  email: {
    type: DataTypes.STRING,
    unique:true
  },
  username: {
    type: DataTypes.STRING,
    unique:true
  },
  name: DataTypes.STRING,
  role: DataTypes.STRING,
  photo: DataTypes.STRING,
})

const connectDb = async (req, res) => {
  try {
    await sequelize.authenticate()
    await sequelize.sync({ alter: true })
    console.log('Connection has been established successfully.')
    return sequelize;
  } catch (error) {
    console.log('Error>>>', error.message)
    console.log('Unable to connect to the database:')
  }
}

const instance = (async () => await connectDb())()


module.exports = {sequelize:instance, UserModel}
