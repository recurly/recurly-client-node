const Resource = require('../lib/recurly/Resource')

class MyResource extends Resource {
  static getSchema () {
    return {
      id: String,
      myString: String,
      myInt: Number,
      myFloat: Number,
      myBoolean: Boolean,
      myDateTime: Date,
      myArray: Array,
      myObject: Object,
      mySubResource: 'MySubResource',
      mySubResourceArray: ['MySubResource']
    }
  }
}

class MySubResource extends Resource {
  static getSchema () {
    return {
      myString: String
    }
  }
}

module.exports.MyResource = MyResource
module.exports.MySubResource = MySubResource
