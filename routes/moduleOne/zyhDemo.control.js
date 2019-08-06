var express = require('express')
var router = express.Router()
var testService = require('../../services/zyhDemo.service')

// 这里的路径是逐级增加的，有几个包装，路径就有几段，并不是所谓的‘匹配’的概念
// 将这里的回调封装成函数，使得control层“只决定由哪个脚本来执行”

// router.get('/getAll', testModel.getAll)

// control--service--model,解耦传统的mvc中的control和model层
router.get('/getAll', testService.getAll)
router.post('/addOne', testService.addOne)

module.exports = router
