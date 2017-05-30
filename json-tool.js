const INDENT = '    '

module.exports = function jsonToolStringify (v) {
  return stringify(v, 0)
}

function stringify (node) {
  if (typeof node !== 'object' || node == null) {
    return JSON.stringify(node)
  }

  if (Array.isArray(node)) {
    if (node.length === 0) { return '[]' }

    return '[\n' + node.map((element) => {
      return indent(stringify(element))
    }).join(',\n') + '\n]'
  }

  const keys = Object.keys(node).sort()
  if (keys.length === 0) { return '{}' }

  return '{\n' + keys.map((key) => {
    return indent(JSON.stringify(key) + ': ' + stringify(node[key]))
  }).join(',\n') + '\n}'
}

function indent (str) {
  return str.split('\n').map((line) => {
    return INDENT + line
  }).join('\n')
}
