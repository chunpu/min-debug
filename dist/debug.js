!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.debug=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = exports = require('./')
exports.init()

},{"./":2}],2:[function(require,module,exports){
(function (global){
module.exports = exports = debug

exports.names = []
exports.skips = []

var colors = 'lightseagreen forestgreen goldenrod dodgerblue darkorchid crimson'.split(' ')
var colorIndex = 0

function noop() {}

function enable(namespaces) {
	if (!namespaces) return
	var split = namespaces.split(/[\s,]+/)
	for (var i = 0; i < split.length; i++) {
		if (!split[i]) continue
		namespaces = split[i].replace(/\*/g, '.*?')
		if ('-' == namespaces[0])
			exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'))
		else
			exports.names.push(new RegExp('^' + namespaces + '$'))
	}
}

function enabled(name) {
	var i = 0, reg
	for (i = 0; reg = exports.skips[i++];) {
		if (reg.test(name)) return false
	}
	for (i = 0; reg = exports.names[i++];) {
		if (reg.test(name)) return true
	}
}

function getColor() {
	return colors[colorIndex++ % colors.length]
}

var prev
var inherit = 'color:inherit'
var console = global.console

exports.log = function(namespace, args, color) {
	var curr = +new Date()
	var ms = curr - (prev || curr)
	prev = curr

	var label = 'ad:ares:' + namespace
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

function debug(namespace) {
	var color = 'color:' + getColor()
	return enabled(namespace) ? function() {
		exports.log(namespace, arguments, color)
	} : noop
}

exports.init = function(key) {
	key = key || 'debug'
	var reg = new RegExp(key + '=(\\S+)')
	var res = reg.exec(location.href)
	if (res) {
		enable(res[1])
		var doc = document
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
					val = val + ''
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});