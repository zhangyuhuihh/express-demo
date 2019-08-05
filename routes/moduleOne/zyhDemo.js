var express = require('express')
var router = express.Router()

// 你他吗，坑死老子，坑中坑之无敌坑坑坑
// 这里的路径是逐级增加的，有几个包装，路径就有几段，并不是所谓的‘匹配’的概念
router.get('/ddd', function(req, res) {
  res.send('张宇辉的demo')
})
module.exports = router
