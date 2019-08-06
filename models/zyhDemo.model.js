const db = require('../assets/mysql/config/pool')

function getData() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM user', (error, rows) => {
      resolve(rows)
    })
  })
}

module.exports = {
  getData
}