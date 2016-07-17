'use strict';

let lib = {

	start: (args, cb) => {
		this.log('starting');
	},

	stop: (args, cb) => {
		this.log('stopping');
	},

	finish: (args, cb) => {
		this.log('finishing');
	}

};

module.exports = lib;
