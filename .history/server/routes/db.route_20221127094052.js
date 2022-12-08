const express = require('express')
const sequelize = require("./routes/db.route");

const router = express.Router()
const startDb = async (req,res) => {
  try { 
    await sequelize.authenticate()
    res.status(200).send('Connection has been established successfully.')
  } catch (error) {
    console.log("Error>>>", error.message);
    res.status(500).send('Unable to connect to the database:')
  }
}

router.get('/start_db', startDb)

module.exports = router
