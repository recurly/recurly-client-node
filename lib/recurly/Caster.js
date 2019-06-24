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
function castResponse (obj) {
  if (obj === null || obj === undefined) return null

  const name = utils.className(obj.object)
  const Klass = Schema.locateResource(name)
  return Klass.cast(obj)
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
