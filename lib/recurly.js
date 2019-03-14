'use strict'

let resources = require('./recurly/resources')
module.exports = Object.assign(resources, {
  'Client': require('./recurly/Client')
})
