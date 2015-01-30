min-debug
===

[![Build status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

debug for browser in console or display on page

Installation
---

```sh
npm install min-debug
```

[Demo](http://chunpu.github.io/min-debug/?debug=*)

min-debug is inspired by [tj@debug](https://github.com/visionmedia/debug)

Usage
---

#### Debug with localStorage

Type `localStorage[mykey] = '*'`, and debug just like tj@debug


#### Debug with page

If browser not support localStorage or you want to see debug on page, use url debug

Type `mykey='*'` in `location.search` or `location.hash`, and will see debug info in a textarea on page


Differences
---

differences with th@debug

- if your program using browserify, you should init the debug key self

```js
module.exports = exports = require('min-debug')
exports.init('mykey') // default is debug
```

- min-debug does not support print format, because we may need log on some old browser like IE6

```js
debug('my data', {foo: 'bar'}) // min-debug style
debug('my data: %o', {foo: 'bar'}) // tj@debug style, not support
```

License
---

ISC

[npm-image]: https://img.shields.io/npm/v/min-debug.svg?style=flat-square
[npm-url]: https://npmjs.org/package/min-debug
[travis-image]: https://img.shields.io/travis/chunpu/min-debug.svg?style=flat-square
[travis-url]: https://travis-ci.org/chunpu/min-debug
[downloads-image]: http://img.shields.io/npm/dm/min-debug.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/min-debug
