const types = {
  'aix-ppc64': 'aix-ppc64',
  'darwin-arm64': 'osx-arm64-tar',
  'darwin-x64': 'osx-x64-tar',
  'darwin-x86': 'osx-x86-tar',
  headers: 'headers',
  'linux-arm64': 'linux-arm64',
  'linux-armv6l': 'linux-armv6l',
  'linux-armv7l': 'linux-armv7l',
  'linux-ppc64le': 'linux-ppc64le',
  'linux-s390x': 'linux-s390x',
  'linux-x64': 'linux-x64',
  'linux-x86': 'linux-x86',
  'node.exe': 'win-x86-exe',
  pkg: 'osx-x64-pkg',
  'smartos-x64': 'smartos-x64',
  'smartos-x86': 'smartos-x86',
  'sunos-x64': 'sunos-x64',
  'sunos-x86': 'sunos-x86',
  'tar.gz': 'src',
  'win-arm.7z': 'win-arm-7z',
  'win-arm.zip': 'win-arm-zip',
  'win-arm/iojs.exe': 'win-arm-exe',
  'win-arm/node.exe': 'win-arm-exe',
  'win-x64.7z': 'win-x64-7z',
  'win-x64.zip': 'win-x64-zip',
  'win-x64/iojs.exe': 'win-x64-exe',
  'win-x64/node.exe': 'win-x64-exe',
  'win-x86.7z': 'win-x86-7z',
  'win-x86.zip': 'win-x86-zip',
  'win-x86/iojs.exe': 'win-x86-exe',
  'win-x86/node.exe': 'win-x86-exe',
  'x64.msi': 'win-x64-msi',
  'x64/node.exe': 'win-x64-exe',
  'x86.msi': 'win-x86-msi',
  // unofficial-builds:
  'linux-loong64': 'linux-loong64',
  'linux-riscv64': 'linux-riscv64',
  'linux-x64-glibc-217': 'linux-x64-glibc-217',
  'linux-x64-musl': 'linux-x64-musl',
  'linux-arm64-musl': 'linux-arm64-musl',
  'linux-x64-pointer-compression': 'linux-x64-pointer-compression',
  'linux-x64-usdt': 'linux-x64-usdt',
  'linux-x64-debug': 'linux-x64-debug',
  'win-arm64.7z': 'win-arm64-7z',
  'win-arm64.zip': 'win-arm64-zip'
}

function transformFilename (file) {
  file = file && file.replace(/^(?:\.\/)?(?:iojs|node)-v\d+\.\d+\.\d+-?((rc\.\d+|(?:(next-)?nightly|test|v8-canary)\d{8}[^-.]+)-?)?\.?/, '')
    .replace(/\.tar\.gz$/, '')

  return types[file]
}

module.exports = transformFilename
