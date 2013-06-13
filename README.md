# grunt-audit-fs

Verify build file/directory properties and content with audit-fs

[![Build Status](https://travis-ci.org/codeactual/grunt-audit-fs.png)](https://travis-ci.org/codeactual/grunt-audit-fs)

## Example

```js
// Fail the build if build/js/all.min.js is larger than 100k
grunt.registerTask('audit-min-js', ['audit-fs:maxSize:build/js/all.min.js:102400']);
```

## Installation

### [NPM](https://npmjs.org/package/grunt-audit-fs)

    npm install grunt-audit-fs

```js
    grunt.loadNpmTasks('grunt-audit-fs');
```

## API

[Documentation](docs/auditfs.md)

## License

  MIT

## Tests

    npm test
