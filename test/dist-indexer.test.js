const assert = require('node:assert')
const { execFileSync } = require('node:child_process')
const { join } = require('node:path')
const { describe, it } = require('node:test')

const distIndexer = join(__dirname, '..', 'src', 'dist-indexer.js')

describe('dist-indexer', () => {
  it('no arguments produces expected error message', () => {
    assert.throws(() => {
      execFileSync(process.execPath, [distIndexer], { encoding: 'utf8' })
    },
    {
      message: /Missing --dist <directory> argument/
    })
  })
})
