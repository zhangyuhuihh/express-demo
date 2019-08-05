var db = require('../assets/mysql/config/pool')

function getData() {
  let data = []
  db.query('SELECT * FROM user', (error, rows) => {
    // res.send(rows)
    data = rows
  })
  return data
}

module.exports = {
  getData
}