module.exports = function(grunt) {
  'use strict';

  require('grunt-horde')
    .create(grunt)
    .demand('initConfig.projName', 'grunt-audit-fs')
    .demand('initConfig.klassName', 'auditfs')
    .demand('initConfig.instanceName', 'gruntAuditFs')
    .loot('node-component-grunt')
    .loot('node-lib-grunt')
    .attack();
};
