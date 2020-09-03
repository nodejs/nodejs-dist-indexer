const notesre = /Version \d+\.\d+\.\d+.*\n(?!\w+<\/title>)\n(.*)\n/m
const securityre = /This is a security release\./

function isSecurityRelease (notes) {
  const m = notes.match(notesre)
  if (m && securityre.test(m[1])) {
    return true
  }

  return false
}

module.exports = isSecurityRelease

if (module === require.main) {
  const assert = require('assert')
  const fs = require('fs')
  const path = require('path')
  const fixturespath = path.join(__dirname, 'test', 'fixtures', 'release-notes')
  const tests = [
    { fixture: 'v10.14.0.atom', expected: true },
    { fixture: 'v10.14.1.atom', expected: false },
    { fixture: 'v11.3.0.atom', expected: true }
  ]

  tests.forEach((test) => {
    console.log(`testing ${test.fixture} -> ${test.expected}`)
    const fixture = path.join(fixturespath, test.fixture)
    const notes = fs.readFileSync(fixture, { encoding: 'utf8' })
    assert.strictEqual(isSecurityRelease(notes), test.expected)
  })
}
