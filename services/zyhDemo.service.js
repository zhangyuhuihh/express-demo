const testModel = require('../models/zyhDemo.model')

// service => 接收来自control的req, res, ,拿到model返回的数据
async function getAll(req, res) {
  // 这里可以进行拿到的数据的处理
  const data = await testModel.getData()
  res.send(data)
}

module.exports = {
  getAll
}
