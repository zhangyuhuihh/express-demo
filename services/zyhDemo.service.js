const testModel = require('../models/zyhDemo.model')
const readyResponse = require('../assets/utils/responseObj')
// service => 接收来自control的req, res, ,拿到model返回的数据
async function getAll(req, res) {
  // 这里可以进行拿到的数据的处理
  const row = await testModel.getData()
  const dataToSend = new readyResponse.responseObjForPage('00000', row, row.length)
  res.send(dataToSend)
}

async function addOne(req, res) {
  await testModel.addData(req.body)
  const dataToSend = new readyResponse.responseObj('00000', '1', '操作成功')
  res.send(dataToSend)
}

async function deleteOne(req, res) {
  await testModel.deleteData(req.body)
  const dataToSend = new readyResponse.responseObj('00000', '1', '操作成功')
  res.send(dataToSend)
}

module.exports = {
  getAll,
  addOne,
  deleteOne
}
