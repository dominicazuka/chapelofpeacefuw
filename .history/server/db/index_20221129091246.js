const { Sequelize, DataTypes } = require('sequelize')
const {
  db_name,
  db_password,
  db_username,
  db_host,
  user_default_image,
  post_default_image
} = require('../config')

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
    unique: true
  },
  username: {
    type: DataTypes.STRING,
    unique: true
  },
  name: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.STRING,
  photo: {
    type: DataTypes.STRING,
    defaultValue: user_default_image
  }
})

const UnitModel = sequelize.define('Unit', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  name: DataTypes.STRING
  
})

const PostModel = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  name: DataTypes.STRING,
  title: DataTypes.STRING,
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  content: DataTypes.STRING,
  author_id: DataTypes.STRING,
  photo: {
    type: DataTypes.STRING,
    defaultValue: post_default_image
  }
})


const ServiceModel = sequelize.define('Service', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  title: DataTypes.STRING,
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  content: DataTypes.STRING,
  author_id: DataTypes.STRING,
  photo: {
    type: DataTypes.STRING,
    defaultValue: post_default_image
  }
})

module.exports = { sequelize, UserModel }
