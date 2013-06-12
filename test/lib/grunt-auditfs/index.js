/*jshint expr:true*/
var sinon = require('sinon');
var chai = require('chai');
var fs = require('fs');
var util = require('util');
var sprintf = util.format;
var grunt = require('grunt');

var should = chai.should();
chai.Assertion.includeStack = true;
chai.use(require('sinon-chai'));

var lib = require('../../..');

require('sinon-doublist')(sinon, 'mocha');

describe('grunt-auditfs', function() {
  'use strict';

  beforeEach(function() {
    var self = this;
    this.context = {};
    this.auditfs = new lib.create(grunt);
    this.run = function() {
      self.auditfs.call(self.context);
    };
  });

  describe('#auditfs', function() {
    it.skip('should do something', function() {
      this.context.data = { /* ... */ };
      this.run();
    });
  });
});
