const resources = require('./resources')

const dtRegex = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\\.[0-9]+)?(Z)?$/

function className (obj) {
  const objName = obj.object
  if (!objName) return null
  return objName
    .replace(/_([a-z])/g, g => g[1].toUpperCase())
    .replace(/^\w/, g => g.toUpperCase())
}

function camelize (name) {
  return name.replace(/(_\w)/g, m => m[1].toUpperCase())
}

function snakeify (name) {
  return name.split(/(?=[A-Z])/).join('_').toLowerCase()
}

function construct (Klass, data) {
  return Object.assign(new Klass(), data)
}

function castResponse (obj, resourceDefs = resources) {
  const name = className(obj)
  const Klass = resourceDefs[name]
  // if it doesn't have a class name,
  // just return as a hash for now
  // might want to cast these values though
  if (!(name && Klass)) return obj

  const resource = construct(Klass, {})
  for (let key in obj) {
    const value = obj[key]
    const newKey = camelize(key)

    if (value) {
      // if it's a resource, cast the item
      if (value.object) {
        resource[newKey] = castResponse(value, resourceDefs)
      // if it's an array, cast each element
      } else if (Array.isArray(value) && value.length > 0 && value[0].object) {
        resource[newKey] = value.map(v => castResponse(v, resourceDefs))
      // cast other special types like datetimes
      // TODO check the performance of this approach
      } else if (typeof value === 'string' && value.match(dtRegex)) {
        resource[newKey] = new Date(value)
      } else {
        resource[newKey] = value
      }
    }
  }

  // I assume we don't need this, maybe we
  // want to preserve it for some reason
  delete resource['object']

  return resource
}

function castRequest (obj) {
  const newObj = {}
  for (let key in obj) {
    const value = obj[key]
    // the order of these conditionals are important
    if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object') {
      newObj[snakeify(key)] = value.map(v => castRequest(v))
    } else if (typeof value === 'object') {
      newObj[snakeify(key)] = castRequest(value)
    } else {
      newObj[snakeify(key)] = value
    }
  }
  return newObj
}

module.exports.castResponse = castResponse
module.exports.castRequest = castRequest
