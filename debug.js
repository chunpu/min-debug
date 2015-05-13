module.exports = exports = Debug

var colors = 'lightseagreen forestgreen goldenrod dodgerblue darkorchid crimson'.split(' ')
var colorIndex = 0
var prev
var inherit = 'color:inherit'
var console = global.console
var doc = global.document
var names = []
var skips = []

init()

exports.prefix = ''

exports.log = function(namespace, args, color) {
	var curr = +new Date
	var ms = curr - (prev || curr)
	prev = curr

	var label = exports.prefix + namespace
	var main = '%c' + label + '%c'
	var arr = [null, color, inherit]
	for (var i = 0; i < args.length; i++) {
		arr.push(args[i])
		main += ' %o'
	}
	arr.push(color)
	main += '%c +' + ms + 'ms'
	arr[0] = main
	console.debug.apply(console, arr)
}

exports.init = init

function Debug(namespace) {
	var color = 'color:' + getColor()
	return enabled(namespace) ? function() {
		exports.log(namespace, arguments, color)
	} : noop
}

function init(key) {
	key = key || 'debug'
	var reg = new RegExp(key + '=(\\S+)')
	var res = reg.exec(location.href)
	if (res) {
		enable(res[1])
		var elem = doc.createElement('textarea')
		elem.style.cssText = 'width:100%;height:300px;overflow:auto;line-height:1.4;background:#333;color:#fff;font:16px Consolas;border:none'
		var box = doc.body || doc.documentElement
		box.insertBefore(elem, box.firstChild)
		exports.log = function(namespace, arr, color) {
			var ret = ['[' + namespace + ']']
			var len = arr.length
			for (var i = 0; i < len; i++) {
				var val = arr[i]
				try {
					val = JSON.stringify(val, 0, 4)
				} catch (e) {
					val += ''
				}
				ret.push(val)
			}
			elem.value += ret.join(' ') + '\n'
			elem.scrollTop = elem.scrollHeight
		}

	} else if (global.localStorage && console) {
		try {
			enable(localStorage[key])
		} catch (ignore) {}
	}
}

function noop() {}

function enable(namespaces) {
	if (!namespaces) return
	skips = []
	names = []
	var split = namespaces.split(/[\s,]+/)
	for (var i = 0; i < split.length; i++) {
		if (!split[i]) continue
		namespaces = split[i].replace(/\*/g, '.*?')
		if ('-' == namespaces[0])
			skips.push(new RegExp('^' + namespaces.substr(1) + '$'))
		else
			names.push(new RegExp('^' + namespaces + '$'))
	}
}

function enabled(name) {
	var i = 0, reg
	for (i = 0; reg = skips[i++];) {
		if (reg.test(name)) return false
	}
	for (i = 0; reg = names[i++];) {
		if (reg.test(name)) return true
	}
}

function getColor() {
	return colors[colorIndex++ % colors.length]
}
