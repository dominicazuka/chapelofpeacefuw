const express = require('express')

const router = express.Router()
const startDb = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

router.get('/start_db', startDb)

module.exports = router
