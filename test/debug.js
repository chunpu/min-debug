var assert = require('assert')
var Debug = require('../')
var key = 'mydebug'

describe('basic', function() {
	var open, closed
	before(function() {
		location.hash += key + '=open*'
		Debug.init(key)
		open = Debug('open-')
		closed = Debug('close')
	})
	it('test href', function() {
		open('it can show')
		closed('throw error if show')
		open('it can show multi')
		var textarea = document.getElementsByTagName('textarea')[0]
		assert(textarea, 'should get textarea')
		var val = textarea.value
		// console.log(val)
		assert(val.indexOf('show') != -1, 'open can show')
		assert(val.indexOf('close cant show') == -1, 'close cant show')
		assert(val.split('\n').length >= 2, 'show multi lines')
	})
})
