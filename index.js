require('babelify-es6-polyfill')
const $ = require('jquery')

const bases = require('./js/base')

const base = new bases()

base.cancel()
base.load_update_form()