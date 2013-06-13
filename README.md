# grunt-audit-fs

Verify build file/directory properties and content with [audit-fs](https://github.com/codeactual/audit-fs)

[![Build Status](https://travis-ci.org/codeactual/grunt-audit-fs.png)](https://travis-ci.org/codeactual/grunt-audit-fs)

## Example

Intent: enforce a maximum file size of `100k` for `build/js/all.min.js`.

### Single-task

Format: `<audit-fs method name>:<arg0>:<arg1>:<etc>`

```js
grunt.registerTask('audit-min-js', ['audit-fs:maxSize:build/js/all.min.js:102400']);
```

### Multi-task

```js
grunt.initConfig({
  'audit-fs-multi': {
    'audit-min-js': {
      rule: 'maxSize',
      args: ['build/js/all.min.js', 102400]
  }
});
```

### Output

On failure:

    Warning: [audit-fs] FAILED: maxSize(build/js/all.min.js.js, 102400) Use --force to continue.

On pass (with `--verbose`):

    [audit-fs] FAILED: maxSize(build/js/all.min.js, 102400) Use --force to continue.

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
