var stringify = require('../../pythonlike-json-tool')
var spawn = require('child_process').spawn

module.exports = function compare (arr) {
  return Promise.all(arr.map(compareOne))
}

function compareOne (value) {
  return new Promise(function (resolve, reject) {
    var actual = stringify(value)

    var python = spawn('python', ['-m', 'json.tool'])

    var pythonResult = ''
    python.stdout.on('data', function (data) {
      pythonResult += data.toString()
    })

    python.on('close', function (code) {
      if (code === 0) {
        var expected = pythonResult.trim()

        if (actual === expected) {
          resolve()
        } else {
          reject(new Error('Expected ' + expected + ' but got ' + actual))
        }
      } else {
        reject(new Error('Python exited unhappily'))
      }
    })

    python.stdin.write(JSON.stringify(value))
    python.stdin.end()
  })
}
