const inspect = require('util').inspect
const utils = require('./utils')

/**
 * Represents a primitive:
 *   - String
 *   - Number
 *   - Boolean
 *   - Object (plain js object)
 *   - Array (of primitives only)
 */
class PrimitiveProperty {
  isValid (value) {
    return true
  }

  cast (value) {
    return value
  }
}

/**
 * Represents a Date in the schema
 */
class DateProperty {
  isValid (value) {
    return typeof value === 'string'
  }
  cast (value) {
    return new Date(value)
  }
}

/**
 * Represents an embedded Resource in the schema
 */
class ResourceProperty {
  constructor (type) {
    this.type = type
  }

  isValid (value) {
    if (Array.isArray(value)) return false
    return typeof value === 'object'
  }

  cast (value) {
    return this.type.cast(value)
  }
}

/**
 * Represents an array of other schema properties.
 *
 * @param {Property} type - Should be Property for element type
 */
class ArrayProperty {
  constructor (type) {
    this.type = type
  }

  isValid (value) {
    if (!Array.isArray(value)) return false
    if (value.length === 0) return true
    return this.type.isValid(value[0])
  }

  cast (value) {
    return value.map(v => this.type.cast(v))
  }
}

class Property {
  /**
   * Factory method to build a Property from a type signature.
   * You should only create Properties through this method.
   */
  static build (typeSig) {
    if (typeof typeSig === 'string') {
      return new ResourceProperty(Schema.locateResource(typeSig))
    } else if (Array.isArray(typeSig) && typeSig.length > 0 && typeof typeSig[0] === 'string') {
      return new ArrayProperty(Property.build(typeSig[0]))
    } else if (typeSig === Date) {
      return new DateProperty()
    } else if ([String, Number, Boolean, Date, Array, Object].includes(typeSig)) {
      return new PrimitiveProperty()
    } else {
      throw new Error(`Type Signature ${inspect(typeSig)} is invalid`)
    }
  }
}

/**
 * The class responsible a compiled schema.
 *
 * @param {Resource} resourceType - the resource type
 */
class Schema {
  static locateResource (name) {
    throw new Error('Schema.locateResource needs an implementation')
  }

  constructor (resourceType) {
    const options = resourceType.getSchema()
    this.type = resourceType
    this.properties = {}
    Object.keys(options).forEach(name => {
      this.properties[name] = Property.build(options[name])
    })
  }

  cast (obj) {
    const T = this.type
    const resource = new T()

    for (let key in obj) {
      const value = obj[key]
      const newKey = utils.camelize(key)
      const propertyType = this.properties[newKey]

      if (propertyType) {
        // if it's a null, just set to null on the resource
        // null is a valid value for any property type
        if (value === null) {
          resource[newKey] = null
        } else {
          // If it's valid, cast and set it
          if (propertyType.isValid(value)) {
            resource[newKey] = propertyType.cast(value)
          // if it's not valid and we are in strict-mode, explode
          } else if (utils.STRICT_MODE) {
            throw new Error(`${T.name} could not map value pair ${newKey} => ${inspect(value)} to schema type ${inspect(propertyType)}`)
          }
          // else we leave resource[newKey] undefined
          // this prevents the programmer from accidentally relying on it
        }
      } else if (utils.STRICT_MODE) {
        throw new Error(`${T.name} could not find schema property for value pair: ${newKey} => ${inspect(value)}`)
      }
      // else we leave resource[newKey] undefined
      // this prevents the programmer from accidentally relying on it
    }

    return resource
  }
}

module.exports.Schema = Schema
module.exports.Property = Property
module.exports.ResourceProperty = ResourceProperty
module.exports.ArrayProperty = ArrayProperty
module.exports.PrimitiveProperty = PrimitiveProperty
module.exports.DateProperty = DateProperty
