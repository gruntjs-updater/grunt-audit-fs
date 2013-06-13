module.exports = function(grunt) {
  'use strict';

  this.kill('registerTask.dox');

  var dist = this.learn('registerTask.dist');
  var doxIdx = dist[0].indexOf('dox');
  if (doxIdx !== -1) {
    dist[0].splice(doxIdx, 1);
    this.demand('registerTask.dist', dist[0]);
  }
};
