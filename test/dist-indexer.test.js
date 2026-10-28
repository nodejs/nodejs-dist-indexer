const assert = require('node:assert')
const { execFileSync } = require('node:child_process')
const { join } = require('node:path')
const { describe, it } = require('node:test')

describe('dist-indexer', () => {
  it('no arguments produces expected error message', () => {
    assert.throws(() => {
      execFileSync(join(__dirname, '..', 'src', 'dist-indexer.js'), { encoding: 'utf8' })
    },
    {
      message: /Missing --dist <directory> argument/
    })
  })
})
