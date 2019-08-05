var express = require('express')
var router = express.Router()

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' })
// })

var zyhDemo = require('./moduleOne/zyhDemo')
var dashboard = require('./moduleTwo/dashboard')
router.use('/zyhDemo', zyhDemo)
router.use('/dashboard', dashboard)
module.exports = router
