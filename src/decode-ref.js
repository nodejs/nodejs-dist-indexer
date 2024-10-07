const dirre = /^(v\d+\.\d+\.\d+(?:-rc\.\d+)?)(?:-((?:next-)?nightly|test|v8-canary)\d{8}(\w+))?$/ // get version or commit from dir name

function decodeRef (dir) {
  const m = dir.match(dirre)
  if (!m) { return null }
  if (!m[2]) { return `node/${m[1]}` }
  return `${m[2] === 'v8-canary' ? 'v8-canary' : 'node'}/${m[3]}`
}

module.exports = decodeRef
