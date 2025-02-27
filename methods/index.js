'use strict'

// core
var XEUtils = require('./xe-utils')

// object
var assign = require('./object/assign')
var extend = require('./object/extend')
var objectEach = require('./object/objectEach')
var lastObjectEach = require('./object/lastObjectEach')
var objectMap = require('./object/objectMap')

// array
var map = require('./array/map')
var some = require('./array/some')
var every = require('./array/every')
var includeArrays = require('./array/includeArrays')
var arrayEach = require('./array/arrayEach')
var lastArrayEach = require('./array/lastArrayEach')
var uniq = require('./array/uniq')
var union = require('./array/union')
var toArray = require('./array/toArray')
var sortBy = require('./array/sortBy')
var shuffle = require('./array/shuffle')
var sample = require('./array/sample')
var slice = require('./array/slice')
var filter = require('./array/filter')
var findKey = require('./array/findKey')
var includes = require('./array/includes')
var find = require('./array/find')
var sum = require('./array/sum')
var mean = require('./array/mean')
var reduce = require('./array/reduce')
var copyWithin = require('./array/copyWithin')
var chunk = require('./array/chunk')
var zip = require('./array/zip')
var unzip = require('./array/unzip')
var zipObject = require('./array/zipObject')
var pluck = require('./array/pluck')
var invoke = require('./array/invoke')
var invokeMap = require('./array/invokeMap')
var toArrayTree = require('./array/toArrayTree')
var toTreeArray = require('./array/toTreeArray')
var findTree = require('./array/findTree')
var eachTree = require('./array/eachTree')
var mapTree = require('./array/mapTree')
var filterTree = require('./array/filterTree')
var searchTree = require('./array/searchTree')
var arrayIndexOf = require('./array/arrayIndexOf')
var arrayLastIndexOf = require('./array/arrayLastIndexOf')

// base
var hasOwnProp = require('./base/hasOwnProp')
var isArray = require('./base/isArray')
var isNull = require('./base/isNull')
var isNumberNaN = require('./base/isNaN')
var isUndefined = require('./base/isUndefined')
var isFunction = require('./base/isFunction')
var isObject = require('./base/isObject')
var isString = require('./base/isString')
var isPlainObject = require('./base/isPlainObject')
var isLeapYear = require('./base/isLeapYear')
var isDate = require('./base/isDate')
var eqNull = require('./base/eqNull')
var each = require('./base/each')
var forOf = require('./base/forOf')
var lastForOf = require('./base/lastForOf')
var indexOf = require('./base/indexOf')
var lastIndexOf = require('./base/lastIndexOf')
var keys = require('./base/keys')
var values = require('./base/values')
var clone = require('./base/clone')
var getSize = require('./base/getSize')
var lastEach = require('./base/lastEach')
var remove = require('./base/remove')
var clear = require('./base/clear')
var isNumberFinite = require('./base/isFinite')
var isFloat = require('./base/isFloat')
var isInteger = require('./base/isInteger')
var isBoolean = require('./base/isBoolean')
var isNumber = require('./base/isNumber')
var isRegExp = require('./base/isRegExp')
var isError = require('./base/isError')
var isTypeError = require('./base/isTypeError')
var isEmpty = require('./base/isEmpty')
var isSymbol = require('./base/isSymbol')
var isArguments = require('./base/isArguments')
var isElement = require('./base/isElement')
var isDocument = require('./base/isDocument')
var isWindow = require('./base/isWindow')
var isFormData = require('./base/isFormData')
var isMap = require('./base/isMap')
var isWeakMap = require('./base/isWeakMap')
var isSet = require('./base/isSet')
var isWeakSet = require('./base/isWeakSet')
var isMatch = require('./base/isMatch')
var isEqual = require('./base/isEqual')
var isEqualWith = require('./base/isEqualWith')
var getType = require('./base/getType')
var uniqueId = require('./base/uniqueId')
var findIndexOf = require('./base/findIndexOf')
var findLastIndexOf = require('./base/findLastIndexOf')
var toStringJSON = require('./base/toStringJSON')
var toJSONString = require('./base/toJSONString')
var entries = require('./base/entries')
var pick = require('./base/pick')
var omit = require('./base/omit')
var first = require('./base/first')
var last = require('./base/last')
var has = require('./base/has')
var get = require('./base/get')
var set = require('./base/set')
var groupBy = require('./base/groupBy')
var countBy = require('./base/countBy')
var range = require('./base/range')
var destructuring = require('./base/destructuring')

// number
var random = require('./number/random')
var max = require('./number/max')
var min = require('./number/min')
var commafy = require('./number/commafy')
var toFixedString = require('./number/toFixedString')
var toFixedNumber = require('./number/toFixedNumber')
var toInteger = require('./number/toInteger')
var toNumber = require('./number/toNumber')

// date
var getWhatYear = require('./date/getWhatYear')
var getWhatMonth = require('./date/getWhatMonth')
var getWhatDay = require('./date/getWhatDay')
var toStringDate = require('./date/toStringDate')
var toDateString = require('./date/toDateString')
var now = require('./date/now')
var timestamp = require('./date/timestamp')
var isDateSame = require('./date/isDateSame')
var getWhatWeek = require('./date/getWhatWeek')
var getYearDay = require('./date/getYearDay')
var getYearWeek = require('./date/getYearWeek')
var getMonthWeek = require('./date/getMonthWeek')
var getDayOfYear = require('./date/getDayOfYear')
var getDayOfMonth = require('./date/getDayOfMonth')
var getDateDiff = require('./date/getDateDiff')

// string
var padEnd = require('./string/padEnd')
var padStart = require('./string/padStart')
var repeat = require('./string/repeat')
var trim = require('./string/trim')
var trimRight = require('./string/trimRight')
var trimLeft = require('./string/trimLeft')
var escape = require('./string/escape')
var unescape = require('./string/unescape')
var camelCase = require('./string/camelCase')
var kebabCase = require('./string/kebabCase')
var startsWith = require('./string/startsWith')
var endsWith = require('./string/endsWith')
var template = require('./string/template')
var toValString = require('./string/toString')

// function
var property = require('./function/property')
var bind = require('./function/bind')
var once = require('./function/once')
var after = require('./function/after')
var before = require('./function/before')
var throttle = require('./function/throttle')
var debounce = require('./function/debounce')
var delay = require('./function/delay')

// url
var unserialize = require('./url/unserialize')
var serialize = require('./url/serialize')
var parseUrl = require('./url/parseUrl')

// browse
var getBaseURL = require('./browse/getBaseURL')
var locat = require('./browse/locat')
var cookie = require('./browse/cookie')
var browse = require('./browse/browse')

XEUtils.mixin({
  // object
  assign: assign,
  extend: extend,
  objectEach: objectEach,
  lastObjectEach: lastObjectEach,
  objectMap: objectMap,

  // array
  uniq: uniq,
  union: union,
  sortBy: sortBy,
  shuffle: shuffle,
  sample: sample,
  some: some,
  every: every,
  slice: slice,
  filter: filter,
  find: find,
  findKey: findKey,
  includes: includes,
  arrayIndexOf: arrayIndexOf,
  arrayLastIndexOf: arrayLastIndexOf,
  map: map,
  sum: sum,
  mean: mean,
  reduce: reduce,
  copyWithin: copyWithin,
  chunk: chunk,
  zip: zip,
  unzip: unzip,
  zipObject: zipObject,
  toArray: toArray,
  includeArrays: includeArrays,
  pluck: pluck,
  invoke: invoke,
  invokeMap: invokeMap,
  arrayEach: arrayEach,
  lastArrayEach: lastArrayEach,
  toArrayTree: toArrayTree,
  toTreeArray: toTreeArray,
  findTree: findTree,
  eachTree: eachTree,
  mapTree: mapTree,
  filterTree: filterTree,
  searchTree: searchTree,

  // base
  hasOwnProp: hasOwnProp,
  eqNull: eqNull,
  isNaN: isNumberNaN,
  isFinite: isNumberFinite,
  isUndefined: isUndefined,
  isArray: isArray,
  isFloat: isFloat,
  isInteger: isInteger,
  isFunction: isFunction,
  isBoolean: isBoolean,
  isString: isString,
  isNumber: isNumber,
  isRegExp: isRegExp,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isDate: isDate,
  isError: isError,
  isTypeError: isTypeError,
  isEmpty: isEmpty,
  isNull: isNull,
  isSymbol: isSymbol,
  isArguments: isArguments,
  isElement: isElement,
  isDocument: isDocument,
  isWindow: isWindow,
  isFormData: isFormData,
  isMap: isMap,
  isWeakMap: isWeakMap,
  isSet: isSet,
  isWeakSet: isWeakSet,
  isLeapYear: isLeapYear,
  isMatch: isMatch,
  isEqual: isEqual,
  isEqualWith: isEqualWith,
  getType: getType,
  uniqueId: uniqueId,
  getSize: getSize,
  indexOf: indexOf,
  lastIndexOf: lastIndexOf,
  findIndexOf: findIndexOf,
  findLastIndexOf: findLastIndexOf,
  toStringJSON: toStringJSON,
  toJSONString: toJSONString,
  keys: keys,
  values: values,
  entries: entries,
  pick: pick,
  omit: omit,
  first: first,
  last: last,
  each: each,
  forOf: forOf,
  lastForOf: lastForOf,
  lastEach: lastEach,
  has: has,
  get: get,
  set: set,
  groupBy: groupBy,
  countBy: countBy,
  clone: clone,
  clear: clear,
  remove: remove,
  range: range,
  destructuring: destructuring,

  // number
  random: random,
  min: min,
  max: max,
  commafy: commafy,
  toFixedString: toFixedString,
  toFixedNumber: toFixedNumber,
  toNumber: toNumber,
  toInteger: toInteger,

  // date
  now: now,
  timestamp: timestamp,
  isDateSame: isDateSame,
  toStringDate: toStringDate,
  toDateString: toDateString,
  getWhatYear: getWhatYear,
  getWhatMonth: getWhatMonth,
  getWhatWeek: getWhatWeek,
  getWhatDay: getWhatDay,
  getYearDay: getYearDay,
  getYearWeek: getYearWeek,
  getMonthWeek: getMonthWeek,
  getDayOfYear: getDayOfYear,
  getDayOfMonth: getDayOfMonth,
  getDateDiff: getDateDiff,

  // string
  trim: trim,
  trimLeft: trimLeft,
  trimRight: trimRight,
  escape: escape,
  unescape: unescape,
  camelCase: camelCase,
  kebabCase: kebabCase,
  repeat: repeat,
  padStart: padStart,
  padEnd: padEnd,
  startsWith: startsWith,
  endsWith: endsWith,
  template: template,
  toString: toValString,

  // function
  property: property,
  bind: bind,
  once: once,
  after: after,
  before: before,
  throttle: throttle,
  debounce: debounce,
  delay: delay,

  // url
  unserialize: unserialize,
  serialize: serialize,
  parseUrl: parseUrl,

  // browse
  getBaseURL: getBaseURL,
  locat: locat,
  browse: browse,
  cookie: cookie
})

module.exports = XEUtils
module.exports.default = XEUtils
