var express = require('express')
var router = express.Router()
var db = require('../../assets/mysql/config/pool')

// 你他吗，坑死老子，坑中坑之无敌坑坑坑
// 这里的路径是逐级增加的，有几个包装，路径就有几段，并不是所谓的‘匹配’的概念
router.get('/', function(req, res) {
  db.query('SELECT * FROM user', (error, rows) => {
    res.send(rows)
  })
})
module.exports = router
