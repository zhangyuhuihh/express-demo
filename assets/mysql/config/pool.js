//mysql连接池配置文件
var mysql = require('mysql')
var $dbConfig = require('./index') //注意改成自己项目中mysql配置文件的路径

// 使用连接池，避免开太多的线程，提升性能
var pool = mysql.createPool($dbConfig)

/**
 * 封装query之sql带不占位符func
 */
function query(sql, callback) {
  pool.getConnection(function(err, connection) {
    connection.query(sql, function(err, rows) {
      callback(err, rows)
      //释放链接
      connection.release()
    })
  })
}

//exports
module.exports = {
  query
}
