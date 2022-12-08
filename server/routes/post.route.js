const express = require('express')
const {
  getPostController,
  insertPostController
} = require('../controllers/post.controller')

const router = express.Router()
router.get('/post', getPostController)

router.post('/post', insertPostController)

module.exports = router
