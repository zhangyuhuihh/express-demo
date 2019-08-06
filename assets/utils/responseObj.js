class responseObj {
  constructor(code, data, msg) {
    this.code = code
    this.data = data
    this.msg = msg
  }
}

class responseObjForPage {
  constructor(code = '99999', list = [], total = 0, msg = '') {
    this.code = code
    this.data = {
      rows: list,
      total: total
    }
    this.msg = msg
  }
}

module.exports = {
  responseObj,
  responseObjForPage
}
