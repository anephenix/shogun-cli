'use strict';

let lib = {

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
