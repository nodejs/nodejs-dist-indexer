#!/usr/bin/env node

const fs = require('fs')
const transformFilename = require('./transform-filename')

function lsTypes (dir, dones, callback) {
  if (typeof dones === 'function') {
    callback = dones
    dones = false
  }

  fs.readdir(dir, (err, files) => {
    if (err) {
      return callback(err)
    }

    if (dones) {
      files = files.map((f) => {
        if (/\.done$/.test(f)) {
          return f.replace(/\.done$/, '')
        }
        return false
      }).filter(Boolean)
    }

    files = files.map(transformFilename)
      .filter(Boolean)
      .sort()

    callback(null, files)
  })
}

if (require.main === module) {
  const dones = process.argv[2] === '-d'
  const dirs = process.argv.slice(dones ? 3 : 2)

  const ls = () => {
    const dir = dirs.shift()
    if (!dir) {
      return
    }

    fs.stat(dir, (err, stat) => {
      if (err || !stat.isDirectory()) {
        return ls()
      }

      lsTypes(dir, dones, (err, files) => {
        if (err) {
          throw err
        }

        files.length && console.log('%s: %s', dir, files.join(' '))
        ls()
      })
    })
  }
  ls()
}
