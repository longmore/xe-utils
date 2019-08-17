var helperGetDateTime = require('./helperGetDateTime')

var now = require('./now')
var toStringDate = require('./toStringDate')

var isDate = require('../base/isDate')

/**
 * 将日期格式化为时间戳
 *
  * @param {String/Number/Date} str 日期或数字
  * @param {String} format 解析日期格式
 * @returns Number
 */
var timestamp = function (str, format) {
  if (arguments.length) {
    var date = toStringDate(str, format)
    return isDate(date) ? helperGetDateTime(date) : date
  }
  return now()
}

module.exports = timestamp
