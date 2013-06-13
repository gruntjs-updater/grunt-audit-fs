/**
 * Verify build file/directory properties and content with audit-fs
 *
 * Licensed under MIT.
 * Copyright (c) 2013 David Smith <https://github.com/codeactual/>
 */

/*jshint node:true*/
'use strict';

var sprintf = require('util').format;
var proxy = require('./single').proxy;

var requireComponent = require('../component/require');
var clone = requireComponent('clone');

/**
 * Create a function for `grunt.registerMultiTask`.
 *
 * Usage:
 *
 *     grunt.registerMultiTask(
 *       'audit-fs',
 *       'Verify build file/directory properties and content with audit-fs',
 *       require('../lib/grunt-audit-fs/multi').create(grunt)
 *     );
 *
 * @return {function} exports.auditfs
 */
exports.create = function(grunt) {
  exports.grunt = grunt;
  return exports.auditfs;
};

/**
 * Function for `grunt.registerMultiTask`.
 *
 * Expected `this.data` properties:
 *
 * - `{string} rule` `audit-fs` rule name, ex. `minCount`
 * - `{array} args` Ex. `minCount` arguments `['./rel/path/to/dir', 5]`
 */
exports.auditfs = function() {
  // Reuse the audit-fs proxy from the single-task module.
  proxy(exports.grunt, this.data.rule, clone(this.data.args));
};
