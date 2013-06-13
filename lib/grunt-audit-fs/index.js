/**
 * Verify build file/directory properties and content with audit-fs
 *
 * Licensed under MIT.
 * Copyright (c) 2013 David Smith <https://github.com/codeactual/>
 */

/*jshint node:true*/
'use strict';

var sprintf = require('util').format;

var requireComponent = require('../component/require');
var clone = requireComponent('clone');

/**
 * Create a function for `grunt.register*Task`.
 *
 * Usage:
 *
 *     grunt.registerTask(
 *       'auditfs',
 *       'Verify build file/directory properties and content with audit-fs',
 *       require('../lib/grunt-audit-fs').create(grunt)
 *     );
 *
 * @return {function} exports.auditfs
 */
exports.create = function(grunt) {
  exports.grunt = grunt;
  return exports.auditfs;
};

/**
 * auditfs task function.
 *
 * Expected `this.args`:
 *
 * - `0`: `audit-fs` rule name, ex. `minCount`
 * - `1..`: Ex. `minCount` arguments `['./rel/path/to/dir', 5]`
 */
exports.auditfs = function() {
  var grunt = exports.grunt;
  /*jshint validthis:true*/
  var task = this;

  var audit = require('audit-fs').create();
  var args = clone(this.args);
  var rule = args.shift();
  var logTmpl = sprintf('[audit-fs] result: %s(%s)', rule, args.join(', '));

  audit[rule].apply(audit, args);

  if (audit.pass()) {
    grunt.verbose.writeln(logTmpl.replace('result', 'PASSED'));
  } else {
    grunt.fail.warn(logTmpl.replace('result', 'FAILED'));
  }
};
