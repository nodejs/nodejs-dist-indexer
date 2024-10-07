const { strictEqual } = require('node:assert')
const { readFileSync } = require('node:fs')
const { join } = require('node:path')
const { describe, it } = require('node:test')
const isSecurityRelease = require('../is-security-release')

const fixturespath = join(__dirname, 'fixtures', 'release-notes')
const tests = [
  { fixture: 'v10.14.0.atom', expected: true },
  { fixture: 'v10.14.1.atom', expected: false },
  { fixture: 'v11.3.0.atom', expected: true }
]

describe('isSecurityRelease', () => {
  tests.forEach((test) => {
    it(`should return ${test.expected} for ${test.fixture}`, () => {
      const fixture = join(fixturespath, test.fixture)
      const notes = readFileSync(fixture, { encoding: 'utf8' })
      strictEqual(isSecurityRelease(notes), test.expected)
    })
  })
})
