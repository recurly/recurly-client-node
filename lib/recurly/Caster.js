const resources = require('./resources')

const utils = require('./utils')

const dtRegex = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\\.[0-9]+)?(Z)?$/

function construct (Klass, data) {
  return Object.assign(new Klass(), data)
}

/**
 * Turns a plain javascript object into Recurly domain objects.
 * This involves camelizing the snake-cased keys and converting the
 * untyped objects into typed objects. It also casts special types like
 * datetimes.
 *
 * @private
 * @param {Object} obj - The plain js object to cast to Recurly object
 * @param {Object} resourceDefs - The optional resource definitions used when casting. Only used for testing.
 * @return {Object}
 */
function castResponse (obj, resourceDefs = resources) {
  const name = utils.className(obj)
  const Klass = resourceDefs[name]

  // either create a Klass object or just a plain js object
  const resource = !(name && Klass) ? {} : construct(Klass, {})

  for (let key in obj) {
    const value = obj[key]
    const newKey = utils.camelize(key)

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

/**
 * Turns a plain javascript object into Recurly request.
 * This involves snakeifying the camel-cased keys.
 *
 * @private
 * @param {Object} obj - The plain js object to cast to Recurly request
 * @return {Object}
 */
function castRequest (obj) {
  const newObj = {}
  for (let key in obj) {
    const value = obj[key]
    // the order of these conditionals are important
    if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object') {
      newObj[utils.snakeify(key)] = value.map(v => castRequest(v))
    } else if (typeof value === 'object') {
      newObj[utils.snakeify(key)] = castRequest(value)
    } else {
      newObj[utils.snakeify(key)] = value
    }
  }
  return newObj
}

module.exports.castResponse = castResponse
module.exports.castRequest = castRequest
