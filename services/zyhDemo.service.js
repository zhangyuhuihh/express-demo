var testModel = require('../models/zyhDemo.model')

// service => 接收来自control的req, res, ,拿到model返回的数据
function getAll(req, res) {
  const data =  testModel.getData()
  res.send(data)
  // db.query('SELECT * FROM user', (error, rows) => {
  //   res.send(rows)
  // })
}

module.exports = {
  getAll
}