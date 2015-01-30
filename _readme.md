inspired by [tj@debug](https://github.com/visionmedia/debug)

[demo](http://chunpu.github.io/min-debug/)

Usage
---

type `localStorage[mykey] = '*'`

if browser not support localStorage or you want to see debug on page, use url debug

type `mykey='*'` in `location.search` or `location.hash`, and will see debug info in a textarea on page


differences with tj@debug
---

- if you browserify your app, you should init the debug key self

```js
module.exports = exports = require('min-debug')
exports.init('mykey') // default is debug
```

- min-debug does not support print format

```js
debug('my data', {foo: 'bar'}) // min-debug style
debug('my data: %o', {foo: 'bar'}) // tj@debug style, not support
```
