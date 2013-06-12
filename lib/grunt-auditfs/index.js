/**
 * Verify build file/directory properties and content with audit-fs
 *
 * Licensed under MIT.
 * Copyright (c) 2013 David Smith <https://github.com/codeactual/>
 */

/*jshint node:true*/
'use strict';

/**
 * Create a function for `grunt.register*Task`.
 *
 * Usage:
 *
 *     grunt.registerTask(
 *       'auditfs',
 *       'Verify build file/directory properties and content with audit-fs',
 *       require('../lib/grunt-auditfs').create(grunt)
 *     );
 *
 * Expected `this.data` format:
 *
 * - Each property is an object:
 *   - `{string|array} src` `grunt.file.expand` patterns
 *   - `{string|array} tasks` Ex. 'lint'.
 *
 * @return {function}
 */
exports.create = function(grunt) {
  exports.grunt = grunt;
  return auditfs;
};

/**
 * Reference to auditfs.
 *
 * Expose for unit test.
 *
 * @api private
 */
exports.auditfs = auditfs;

var shelljs = require('shelljs');
var exec = shelljs.exec;
var intersect = require('intersect');
var sprintf = require('util').format;
var uniq = require('uniq');

var requireComponent = require('../component/require');
var each = requireComponent('each');

var silent = {silent: true};

/**
 * auditfs task function.
 *
 * @param {object} grunt
 * @api private
 */
function auditfs() {
  var grunt = exports.grunt;
  /*jshint validthis:true*/
  var task = this;

  console.log('hi', typeof grunt);
  console.log('this', task);
}
