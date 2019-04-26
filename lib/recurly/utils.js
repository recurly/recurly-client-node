
function className (obj) {
  const objName = obj && obj.object
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

function classify (name) {
  name = camelize(name)
  return name.charAt(0).toUpperCase() + name.slice(1)
}

module.exports.className = className
module.exports.camelize = camelize
module.exports.snakeify = snakeify
module.exports.classify = classify
