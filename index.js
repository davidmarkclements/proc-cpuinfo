var fs = require('fs')

var cpuinfo = !fs.existsSync('/proc/cpuinfo') ? '' : fs.readFileSync('/proc/cpuinfo') + ''

module.exports = function () {
  return cpuinfo.split('\n').reduce(function (result, line) {
    line = line.replace(/\t/g, '')
    var parts = line.split(':')
    var key = parts[0].replace(/\s/g, '_')
    if (parts.length === 2) {
      result[key] = parts[1].trim().split(' ')
    }
    return result
  }, {})
}
