const bcrypt = require('bcryptjs')

const generateHash = str => {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(str, salt)
  return hash
} 

module.exports = {
  generateHash
}
