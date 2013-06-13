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

    var auditFsModule = require('audit-fs');
    var audit = auditFsModule.create();
    this.auditStub = this.stub(audit);
    this.stub(auditFsModule, 'create').returns(this.auditStub);

    this.verboseWriteStub = this.stub(grunt.verbose, 'writeln');
    this.failWarnStub = this.stub(grunt.fail, 'warn');

    this.rule = 'minSize';
    this.name = '/path/to/file';
    this.size = 40;
    this.args = [this.name, this.size];
    this.log = sprintf('[audit-fs] result: %s(%s)', this.rule, this.args.join(', '));

    this.context = {args: [this.rule].concat(this.args)};
    this.task = new lib.create(grunt);
    this.run = function() {
      self.task.call(self.context);
    };
  });

  describe('#auditfs', function() {
    it('should log pass', function() {
      this.auditStub.pass.returns(true);
      this.run();
      this.auditStub.minSize.should.have.been.calledWithExactly(this.name, this.size);
      this.verboseWriteStub.should.have.been.calledWithExactly(this.log.replace('result', 'PASSED'));
    });

    it('should log fail', function() {
      this.auditStub.pass.returns(false);
      this.run();
      this.auditStub.minSize.should.have.been.calledWithExactly(this.name, this.size);
      this.failWarnStub.should.have.been.calledWithExactly(this.log.replace('result', 'FAILED'));
    });
  });
});
