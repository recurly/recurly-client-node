'use strict'

const fs = require('fs')
const path = require('path')
const resourcesPath = path.join(__dirname, 'resources')
const exps = fs.readdirSync(resourcesPath).reduce((acc, file) => {
  let className = file.split('/').reverse()[0].split('.')[0]
  acc[className] = require(`./resources/${file}`)
  return acc
}, {})

const Page = require('./Page')
// Page has object type "list"
exps.List = Page

module.exports = exps
