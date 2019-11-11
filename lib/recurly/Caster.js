const utils = require('./utils')
const Schema = require('./schemas').Schema

/**
 * Turns a plain javascript object into Recurly domain objects.
 * This involves camelizing the snake-cased keys and converting the
 * untyped objects into typed objects. It also casts special types
 * like datetimes.
 *
 * @private
 * @param {Object} obj - The plain js object to cast to Recurly object
 * @return {Resource}
 */
function castFileResponse (obj) {
  const Klass = Schema.locateResource('BinaryFile')
  return Klass.cast({ data: obj })
}

/**
 * Turns a plain javascript object into Recurly domain objects.
 * This involves camelizing the snake-cased keys and converting the
 * untyped objects into typed objects. It also casts special types
 * like datetimes.
 *
 * @private
 * @param {Object} obj - The plain js object to cast to Recurly object
 * @return {Resource}
 */
function castJsonResponse (obj) {
  let name, parsedObj
  if (obj === null || obj === undefined) {
    parsedObj = null
    name = 'Empty'
  } else {
    parsedObj = JSON.parse(obj)
    name = utils.className(parsedObj.object)
  }

  const Klass = Schema.locateResource(name)
  return Klass.cast(parsedObj)
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
    const newKey = utils.snakeify(key)

    // the order of these conditionals are important
    if (value === null || value === undefined) {
      newObj[newKey] = null
    } else if (Array.isArray(value) && value.length > 0) {
      // If they are not primitives, recursively cast
      if (typeof value[0] === 'object') {
        newObj[newKey] = value.map(castRequest)
      // else pass along the unaltered array of primitives
      } else {
        newObj[newKey] = value
      }
    } else {
      if (value instanceof Date) {
        newObj[newKey] = value.toISOString()
      } else if (typeof value === 'object' && !Array.isArray(value)) {
        newObj[newKey] = castRequest(value)
      } else {
        newObj[newKey] = value
      }
    }
  }
  return newObj
}

module.exports.castFileResponse = castFileResponse
module.exports.castJsonResponse = castJsonResponse
module.exports.castRequest = castRequest
