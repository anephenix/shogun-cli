'use strict';

// Dependencies
const config = require('./lib/config');
const routes = require('./lib/routes');
const superagent = require('superagent');

let apiMethods = {

	signup: (params, cb) {
		// Use superagent to transport this over HTTPS in some way
		// TODO - find a way to set shogun API url between development,
		// testing and live environments.
		superagent.post(config.apiURL + routes.signup)
		.set('Accept', 'application/json')
		.send(params)
		.end(cb);
	}

}

module.exports = apiMethods;
