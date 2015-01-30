min-debug
===

[![Build status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

Debug for browser in console or display on page

Installation
---

```sh
npm install min-debug
```

Introduction
---

[Demo](http://chunpu.github.io/min-debug/?debug=*)

`min-debug` is inspired by [tj@debug](https://github.com/visionmedia/debug)

Support IE6+

![IE6](https://cloud.githubusercontent.com/assets/4565306/5972401/d32f21c8-a893-11e4-813b-852973ae82e0.png)

Easy for **Phone** debug log

![iPhone](https://cloud.githubusercontent.com/assets/4565306/5972402/de802978-a893-11e4-8f92-5902d99ae697.png)

Also With log in Console

![Console](https://cloud.githubusercontent.com/assets/4565306/5972375/6ad4bc50-a893-11e4-812e-948bbae5f96d.png)

Start
---

Debug with localStorage

Type `localStorage[mykey] = '*'`, and debug just like tj's debug


Debug with page

If browser not support localStorage or you want to see debug on page, use url debug

Type `mykey='*'` in url href either `location.search` or `location.hash`, and will see debug info in a textarea on page

> the key pattern is regexp match, just like tj's debug
> e.g. `localStorage.debug = 'api*, call, -*verbose*'`


Usage
---

run `min-debug` directly with [dist/debug.js](http://chunpu.github.io/min-debug/dist/debug.js), support

- window.debug
- define
- module.exports


If your program using browserify, you should init the debug key self

```js
module.exports = exports = require('min-debug')
exports.init('mykey') // default is debug
```

`min-debug` does not support *print format*, because we may need log on some old browser like IE6

```js
debug('my data', {foo: 'bar'}) // min-debug style
debug('my data: %o', {foo: 'bar'}) // tj's debug style, not support
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
