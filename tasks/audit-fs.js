/**
 * Verify build file/directory properties and content with audit-fs
 *
 * Licensed under MIT.
 * Copyright (c) 2013 David Smith <https://github.com/codeactual/>
 */

/*jshint node:true*/
'use strict';

module.exports = function(grunt) {
  grunt.registerTask(
    'audit-fs',
    'Verify build file/directory properties and content with audit-fs',
    require('../lib/grunt-audit-fs').create(grunt)
  );
};
