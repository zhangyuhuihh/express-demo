var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
  res.send('首页的东西')
})

module.exports = router
