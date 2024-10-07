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
