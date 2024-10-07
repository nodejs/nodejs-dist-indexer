const assert = require('assert')
const { describe, it } = require('node:test')
const decodeRef = require('../decode-ref')

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

describe('decodeRef', () => {
  tests.forEach((test) => {
    it(`should return ${test.ref} for ${test.dir}`, () => {
      assert.strictEqual(decodeRef(test.dir), test.ref)
    })
  })
})
