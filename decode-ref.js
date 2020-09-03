const assert = require('assert')
const dirre = /^(v\d+\.\d+\.\d+(?:-rc\.\d+)?)(?:-((?:next-)?nightly|test|v8-canary)\d{8}(\w+))?$/ // get version or commit from dir name

function decodeRef (dir) {
  const m = dir.match(dirre)
  if (!m) { return null }
  if (!m[2]) { return `node/${m[1]}` }
  return `${m[2] === 'v8-canary' ? 'v8-canary' : 'node'}/${m[3]}`
}

module.exports = decodeRef

if (module === require.main) {
  const tests = [
    { dir: 'v1.0.0', ref: 'node/v1.0.0' },
    { dir: 'v10.11.12', ref: 'node/v10.11.12' },
    { dir: 'v2.3.2-nightly20150625dcbb9e1da6', ref: 'node/dcbb9e1da6' },
    { dir: 'v2.3.1-next-nightly201506308f6f4280c6', ref: 'node/8f6f4280c6' },
    { dir: 'v3.0.0-rc.1', ref: 'node/v3.0.0-rc.1' },
    { dir: 'v33.22.1-rc.111', ref: 'node/v33.22.1-rc.111' },
    { dir: 'v0.6.1', ref: 'node/v0.6.1' },
    { dir: 'v0.5.1', ref: 'node/v0.5.1' },
    { dir: 'v6.0.0-test20151107093b0e865c', ref: 'node/093b0e865c' },
    { dir: 'v9.0.0-v8-canary20170609cd40078f1f', ref: 'v8-canary/cd40078f1f' }
  ]

  tests.forEach((test) => {
    console.log(`testing ${test.dir} -> ${test.ref}`)
    assert.strictEqual(decodeRef(test.dir), test.ref)
  })
}
