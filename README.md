# xe-utils

[![npm version](https://img.shields.io/npm/v/xe-utils.svg?style=flat-square)](https://www.npmjs.org/package/xe-utils)
[![npm build](https://travis-ci.org/xuliangzhan/xe-utils.svg?branch=master)](https://travis-ci.org/xuliangzhan/xe-utils)
[![npm downloads](https://img.shields.io/npm/dm/xe-utils.svg?style=flat-square)](http://npm-stat.com/charts.html?package=xe-utils)
[![gzip size: JS](http://img.badgesize.io/https://unpkg.com/xe-utils/dist/xe-utils.min.js?compression=gzip&label=gzip%20size:%20JS)](https://unpkg.com/xe-utils/lib/index.umd.min.js)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/xuliangzhan/xe-utils/blob/master/LICENSE)

javascript 函数库、工具类，提供一套实用的函数库

## Browser Support

![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_7-8/internet-explorer_7-8_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
--- | --- | --- | --- | --- | --- |
7+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 6.1+ ✔ |

## Docs

[查看文档 API](https://xuliangzhan.github.io/xe-utils/)

## Installing

```shell
npm install xe-utils
```

Using nodejs

```javascript
const XEUtils = require('xe-utils')
```

Get on [unpkg](https://unpkg.com/xe-utils/) and [cdnjs](https://cdn.jsdelivr.net/npm/xe-utils/)

```HTML
<script src="https://cdn.jsdelivr.net/npm/xe-utils"></script>
```

### Import all methods

```javascript
import XEUtils from 'xe-utils'

XEUtils.toDateString(Date.now()) // 2018-01-01 10:30:28
XEUtils.toStringDate('2018-01-01 10:30:00') // Mon Jan 01 2018 10:30:00 GMT+0800 (中国标准时间)
```

## Import on demand

By introducing the method as needed, the volume can be minimized.  
这样按需引入方法，可以使体积达到最小

单个导入，包的大小 gzip >≈ 60B 起步，按需导入，不浪费一丝空间  
Single import, package size gzip >≈ 60B start, import as needed, no waste of space.

```javascript
import XEUtils from 'xe-utils/methods/xe-utils'
import each from 'xe-utils/methods/base/each'
import toDateString from 'xe-utils/methods/date/toDateString'
import toFixedNumber from 'xe-utils/methods/number/toFixedNumber'

XEUtils.mixin({
  each,
  toDateString,
  toFixedNumber
})

XEUtils.toDateString(Date.now(), 'yyyy-MM-dd HH:mm:ss') // 2018-01-01 10:30:28
```

Import all methods by methods  
按功能导入所有方法

```javascript
import XEUtils from 'xe-utils/methods/xe-utils'
import objectMethods from 'xe-utils/methods/object'
import arrayMethods from 'xe-utils/methods/array'
import baseMethods from 'xe-utils/methods/base'
import numberMethods from 'xe-utils/methods/number'
import dateMethods from 'xe-utils/methods/date'
import stringMethods from 'xe-utils/methods/string'
import functionMethods from 'xe-utils/methods/function'
import urlMethods from 'xe-utils/methods/url'
import browseMethods from 'xe-utils/methods/browse'

XEUtils.mixin(
  // object
  objectMethods,
  // array
  arrayMethods,
  // base
  baseMethods,
  // number
  numberMethods,
  // date
  dateMethods,
  // string
  stringMethods,
  // function
  functionMethods,
  // url
  urlMethods,
  // browse
  browseMethods
)

XEUtils.toStringDate('2018-01-01 10:30:28') // Mon Jan 01 2018 10:30:28 GMT+0800 (中国标准时间)
```

## License

MIT License, 2017-present, Xu Liangzhan
