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
 * Create a function for `grunt.registerTask`.
 *
 * Usage:
 *
 *     grunt.registerTask(
 *       'audit-fs',
 *       'Verify build file/directory properties and content with audit-fs',
 *       require('../lib/grunt-audit-fs/single').create(grunt)
 *     );
 *
 * @return {function} exports.auditfs
 */
exports.create = function(grunt) {
  exports.grunt = grunt;
  return exports.auditfs;
};

/**
 * Function for `grunt.registerTask`.
 *
 * Expected `this.args`:
 *
 * - `0`: `audit-fs` rule name, ex. `minCount`
 * - `1..`: Ex. `minCount` arguments `['./rel/path/to/dir', 5]`
 */
exports.auditfs = function() {
  var args = clone(this.args);
  var rule = args.shift();

  exports.proxy(exports.grunt, rule, args);
};

/**
 * `audit-fs` proxy used by single/multi task definitions.
 *
 * @param {object} grunt
 * @param {string} rule Ex. `minCount`
 * @param {string} args*  Ex. `minCount` arguments `['./rel/path/to/dir', 5]`
 */
exports.proxy = function(grunt, rule, args) {
  var audit = require('audit-fs').create();
  var logTmpl = sprintf('[audit-fs] result: %s(%s)', rule, args.join(', '));

  audit[rule].apply(audit, args);

  if (audit.pass()) {
    grunt.verbose.writeln(logTmpl.replace('result', 'PASSED'));
  } else {
    grunt.fail.warn(logTmpl.replace('result', 'FAILED'));
  }
};
