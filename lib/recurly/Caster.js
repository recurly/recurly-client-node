const resources = require('./resources')

const dtRegex = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\\.[0-9]+)?(Z)?$/

function className (obj) {
  const objName = obj.object
  if (!objName) return null
  return objName
    .replace(/_([a-z])/g, g => g[1].toUpperCase())
    .replace(/^\w/, g => g.toUpperCase())
}

function construct (Klass, data) {
  return Object.assign(new Klass(), data)
}

function cast (obj) {
  const name = className(obj)
  const Klass = resources[name]
  // if it doesn't have a class name,
  // just return as a hash for now
  // might want to cast these values though
  if (!(name && Klass)) return obj

  // I assume we don't need this, maybe we
  // want to preserve it for some reason
  delete obj['object']

  const resource = construct(Klass, obj)
  for (let key in resource) {
    const value = resource[key]

    if (value) {
      // if it's a resource, cast the item
      if (value.object) {
        resource[key] = cast(value)
      // if it's an array, cast each element
      } else if (Array.isArray(value)) {
        if (value.length > 0 && value[0].object) {
          resource[key] = value.map(v => cast(v))
        }
      // cast other special types like datetimes
      } else if (typeof value === 'string') {
        // TODO check the performance of this approach
        if (value.match(dtRegex)) {
          resource[key] = new Date(value)
        }
      }
    }
  }

  return resource
}

module.exports = cast
