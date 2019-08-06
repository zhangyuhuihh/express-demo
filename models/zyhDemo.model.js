const db = require('../assets/mysql/config/pool')

// 查
function getData() {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM user`
    db.query(sql, (error, rows) => {
      resolve(rows)
    })
  })
}

// 增
function addData(data) {
  const sql = `INSERT INTO user (id,name) VALUES (50, '${data.name}')`
  return new Promise((resolve, reject) => {
    db.query(sql, (error, rows) => {
      resolve(rows)
    })
  })
}

module.exports = {
  getData,
  addData
}
