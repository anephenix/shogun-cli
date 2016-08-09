'use strict';

// Dependencies
const api = require('./api');
const co = require('co');
const prompt = require('co-prompt');

let lib = {

	signup: () => {
		co(function *() {
			// TODO - need to add validation logic somewhere to handle:
			// - already taken usernames/emails
			// - invalid emails
			// - invalid passwords
			var username = yield prompt('Enter your preferred username:\n');
			var email = yield prompt('Enter your Email:\n');
			var password = yield prompt.password('Enter your Password (minium 6 characters):\n','');

			api.signup({ username, email, password} , (err, response) => {

			});

		});
	},

  start: (args) => {
    console.log('starting');
  },

  stop: (args) => {
    console.log('stopping');
  },

  finish: (args) => {
    console.log('finishing');
  }
};

module.exports = lib;
