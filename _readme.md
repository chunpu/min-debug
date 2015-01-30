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
