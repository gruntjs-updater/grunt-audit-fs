module.exports = function(grunt) {
  'use strict';

  require('grunt-horde')
    .create(grunt)
    .demand('initConfig.projName', 'grunt-audit-fs')
    .demand('initConfig.klassName', 'audit-fs')
    .demand('initConfig.instanceName', 'gruntAuditFs')
    .loot('node-component-grunt')
    .loot('node-lib-grunt')
    .loot('./config/grunt')
    .attack();
};
