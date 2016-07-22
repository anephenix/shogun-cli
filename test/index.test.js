'use strict';

describe('shogun', () => {

	describe('link', () => {

		describe('when a valid token is passed', () => {

			it('should save the token to the hard disk for authenticating API calls');

		});

	});

	describe('start', () => {

		describe('when an existing task name is given', () => {

			it('should start that task');

		});

		describe('when a new task name is given', () => {

			it('should create a task with that name, and start it');

		});

	});

	describe('stop', () => {

		it('should stop the user\'s task');

	});

	describe('finish', () => {

		it('should mark the task as finished');

	});

});
