var INDENT = '    '

module.exports = function jsonToolStringify (v) {
  return stringify(v, 0)
}

function stringify (node) {
  if (typeof node !== 'object' || node == null) {
    return JSON.stringify(node)
  }

  if (Array.isArray(node)) {
    if (node.length === 0) { return '[]' }

    return '[\n' + node.map(function (element) {
      return indent(stringify(element))
    }).join(',\n') + '\n]'
  }

  var keys = Object.keys(node).sort()
  if (keys.length === 0) { return '{}' }

  return '{\n' + keys.map(function (key) {
    return indent(JSON.stringify(key) + ': ' + stringify(node[key]))
  }).join(',\n') + '\n}'
}

function indent (str) {
  return str.split('\n').map(function (line) {
    return INDENT + line
  }).join('\n')
}
