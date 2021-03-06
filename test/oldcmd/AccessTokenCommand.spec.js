'use strict';

var Spinner = require('./../mocks/Spinner.mock.js');
var Interpreter = require('../../oldlib/interpreter');
var proxyquire = require('proxyquire');

require('should');

var settings = {

	username: 'test'

};

var AccessTokenCommand = proxyquire('../../commands/AccessTokenCommands', {
	'cli-spinner': Spinner,
	'../settings.js': settings
});

describe('AccessToken Command', function() {

	var cli;
	var access;

	before(function() {
		this.timeout(10*1000);
		cli = new Interpreter();
		cli.startup();

		access = new AccessTokenCommand(cli);
	});

	it('Can list tokens', function() {

		access.optionsByName['list'].should.be.instanceOf(Function);
	});

	it('Can revoke tokens', function() {

		access.optionsByName['revoke'].should.be.instanceOf(Function);
	});

	it('Can create tokens', function() {

		access.optionsByName['new'].should.be.instanceOf(Function);
	});

	it('Can check arguments', function() {

		access.checkArguments(['test', '--force', 'arguments']);
		access.options.force.should.equal(true);
	});

});
