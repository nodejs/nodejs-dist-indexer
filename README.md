# nodejs-dist-indexer

**An application to create [nodejs.org](https://nodejs.org) distribution index files: index.json and index.tab**

Output can be seen at:

 * https://nodejs.org/download/release/index.tab
 * https://nodejs.org/download/release/index.json
 * https://iojs.org/download/release/index.tab
 * https://iojs.org/download/release/index.json

And all subdirectories of https://nodejs.org/download/ and https://iojs.org/download/ containing downloadable tarballs and installers.

## Data

For the purpose of cataloguing files within each versioned subdirectory, nodejs-dist-indexer is able to:

* Determine the specific version of each directory (just the directory name!)
* Determine the date the distributables were built
* Decode filenames to determine the OS / architecture / packaging available
* Determine the version of dependencies bundled with Node.js, including:
  - npm
  - V8
  - libuv
  - zlib
  - OpenSSL
* Determine the `NODE_MODULES_VERSION` for compiled add-on compatibility
* Determine whether the version is an LTS or not

All of this data is made available in JSON and tab-separated format.

OS / architecture / packaging specifiers used in the listings include:

* **aix-ppc64**: normally .tar.gz and .tar.xz
* **headers**: normally .tar.gz and .tar.xz, downloaded by [node-gyp](https://github.com/nodejs/node-gyp/)
* **linux-arm64**: normally .tar.gz and .tar.xz (also known as AArch64 or ARMv8)
* **linux-armv6l**: normally .tar.gz and .tar.xz
* **linux-armv7l**: normally .tar.gz and .tar.xz
* **linux-loong64**: normally .tar.gz and .tar.xz
* **linux-ppc64le**: normally .tar.gz and .tar.xz
* **linux-riscv64**: normally .tar.gz and .tar.xz
* **linux-s390x**: normally .tar.gz and .tar.xz
* **linux-x64**: normally .tar.gz and .tar.xz
* **linux-x64-debug**: normally .tar.gz and .tar.xz
* **linux-x64-glibc-217**: normally .tar.gz and .tar.xz
* **linux-x86**: normally .tar.gz and .tar.xz
* **linux-arm64-musl**: normally .tar.gz and .tar.xz
* **osx-arm64-tar**: normally .tar.gz and .tar.xz
* **osx-x64-pkg**: OSX .pkg installer (64-bit only since io.js v1)
* **osx-x64-tar**: normally .tar.gz and .tar.xz
* **src**: normally .tar.gz and .tar.xz, full source used to build the distribution
* **sunos-x64**: normally .tar.gz and .tar.xz
* **sunos-x86**: normally .tar.gz and .tar.xz
* **win-x64-msi**: Windows 64-bit .msi installer
* **win-x86-msi**: Windows 32-bit .msi installer
* **win-x64-exe**: Windows 64-bit bare node.exe, within a win-x64 directory
* **win-x86-exe**: Windows 32-bit bare node.exe, within a win-x86 directory

## Usage:

Create an index.json and index.tab from a given distribution directory that contains subdirectories that contain distributable files:

```text
nodejs-dist-indexer \
  --dist /path/to/dist/directory/
  --indexjson /path/to/dist/directory/index.json
  --indextab /path/to/dist/directory/index.tab
```

List the type of distributable files contained within given directories:

```text
nodejs-ls-types [-d] <directory>[ <directory> [<directory> ...]]
```

The `-d` argument is supplied if it is to only count files that have a corresponding `.done` file; this is used for promoting staged releases where the `.done` file indicates that an upload from a build server is complete.

Output looks like:

```text
$ nodejs-ls-types latest*
latest: aix-ppc64 headers linux-arm64 linux-armv6l linux-armv7l linux-ppc64le linux-x64 linux-x86 osx-x64-pkg osx-x64-tar src sunos-x64 sunos-x86 win-x64-msi win-x86-msi
latest-argon: headers linux-arm64 linux-armv6l linux-armv7l linux-ppc64le linux-x64 linux-x86 osx-x64-pkg osx-x64-tar src sunos-x64 sunos-x86 win-x64-msi win-x86-msi
latest-v0.10.x: headers linux-x64 linux-x86 osx-x64-pkg osx-x64-tar osx-x86-tar src sunos-x64 sunos-x86 win-x86-exe win-x86-msi
latest-v0.12.x: headers linux-x64 linux-x86 osx-x64-pkg osx-x64-tar osx-x86-tar src sunos-x64 sunos-x86 win-x86-exe win-x86-msi
latest-v4.x: headers linux-arm64 linux-armv6l linux-armv7l linux-ppc64le linux-x64 linux-x86 osx-x64-pkg osx-x64-tar src sunos-x64 sunos-x86 win-x64-msi win-x86-msi
latest-v5.x: headers linux-arm64 linux-armv6l linux-armv7l linux-ppc64le linux-x64 linux-x86 osx-x64-pkg osx-x64-tar src sunos-x64 sunos-x86 win-x64-msi win-x86-msi
latest-v6.x: aix-ppc64 headers linux-arm64 linux-armv6l linux-armv7l linux-ppc64le linux-x64 linux-x86 osx-x64-pkg osx-x64-tar src sunos-x64 sunos-x86 win-x64-msi win-x86-msi
```

-----------------------------------

Managed under the governance of the Node.js [Build Working Group](https://github.com/nodejs/build).

Copyright (c) 2016 Node.js Foundation. All rights reserved.

Licensed under MIT, see the LICENSE.md file for details
