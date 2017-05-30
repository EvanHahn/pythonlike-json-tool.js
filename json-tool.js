(function (global) {
  var INDENT = '    '

  function jsonToolStringify (node) {
    if (typeof node !== 'object' || node == null) {
      return JSON.stringify(node)
    }

    if (Array.isArray(node)) {
      if (node.length === 0) { return '[]' }

      return '[\n' + node.map(function (element) {
        return indent(jsonToolStringify(element))
      }).join(',\n') + '\n]'
    }

    var keys = Object.keys(node).sort()
    if (keys.length === 0) { return '{}' }

    return '{\n' + keys.map(function (key) {
      return indent(JSON.stringify(key) + ': ' + jsonToolStringify(node[key]))
    }).join(',\n') + '\n}'
  }

  function indent (str) {
    return str.split('\n').map(function (line) {
      return INDENT + line
    }).join('\n')
  }

  if (typeof module === 'undefined') {
    global.jsonToolStringify = jsonToolStringify
  } else {
    module.exports = jsonToolStringify
  }
})(this)
