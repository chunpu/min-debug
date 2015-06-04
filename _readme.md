Introduction
---

[Demo](http://chunpu.github.io/min-debug/?debug=*)

`min-debug` is inspired by [tj@debug](https://github.com/visionmedia/debug)

Easy for **Phone** debug log

![iPhone](https://cloud.githubusercontent.com/assets/4565306/5986780/3be01de8-a944-11e4-8f1d-67e39c8b56c6.png)

Support **IE6+**

![IE6](https://cloud.githubusercontent.com/assets/4565306/5986698/2ccc14d8-a93f-11e4-9126-2be906af0951.png)

Also work with log in **Console**

![Console](https://cloud.githubusercontent.com/assets/4565306/5986930/53dcd1ae-a94c-11e4-857c-99010a4a7201.png)

Start
---

Debug with localStorage

Type `localStorage.debug = '*'`, then the debug logs just show like tj's debug

> if your website is maintained by different teams, you can customize your key rather than 'debug' when initing min-debug module
> so teams won't disturb each other


Debug with page

If browser not support localStorage or you want to see debug log on page, use url debug

Type `debug='*'` in url href either `location.search` or `location.hash`, and will see debug info in a textarea on page

> support wildcast match, just like tj's debug
> e.g. `localStorage.debug = 'api*, call, -*verbose*'`


Usage
---

run `min-debug` directly with [dist/debug.js](http://chunpu.github.io/min-debug/dist/debug.js), support

- window.debug
- define
- module.exports

CommonJS Usage

```js
var debug = require('debug')('main')

debug('hello')
```

`min-debug` does not support *print format*, because we may need to show logs on some old browsers like IE6

```js
debug('my data', {foo: 'bar'}) // min-debug style
debug('my data: %o', {foo: 'bar'}) // tj's debug style, not support
```

Advanced
---

Init with another key

```js
var Debug = require('debug')
Debug.init('mydebug') // then use localStorage.mydebug = '*'
```

Overwrite log function

```js
var Debug = require('debug')
Debug.log = function(name, args, color) {
	// ...
}
```

Small Size
---

```sh
cat debug.js | uglifyjs -mc | gzip | wc -m
# ==> 483b
```
