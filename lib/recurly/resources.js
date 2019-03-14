'use strict'

let fs = require('fs')

let path = require('path')

let resourcesPath = path.join(__dirname, 'resources')
module.exports = fs.readdirSync(resourcesPath).reduce((acc, file) => {
  let className = file.split('/').reverse()[0].split('.')[0]
  acc[className] = require(`./resources/${file}`)
  return acc
}, {})
