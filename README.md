# grunt-auditfs

Verify build file/directory properties and content with audit-fs

[![Build Status](https://travis-ci.org/codeactual/grunt-auditfs.png)](https://travis-ci.org/codeactual/grunt-auditfs)

## Example

```js
// Fail the build if build/js/all.min.js is larger than 100k
grunt.registerTask('audit-min-js', ['audit-fs:maxSize:build/js/all.min.js:102400']);
```

## Installation

### [NPM](https://npmjs.org/package/grunt-auditfs)

    npm install grunt-auditfs

```js
    grunt.loadNpmTasks('grunt-auditfs');
```

## API

[Documentation](docs/auditfs.md)

## License

  MIT

## Tests

    npm test
