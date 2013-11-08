
var Disc = require('./Disc.js');
var _ = require('lodash');
var algos = require('./algorithms.js');
var config = require('./config.json');

var size = config.discSize || 10;
var start = _.isNumber(config.startingPosition) ? config.startingPosition : Math.floor(Math.random()*size);

console.log('starting at', start);

var run = function (algorithm) {
	var disc = new Disc(algos[algorithm], start, size);
	disc.request(config.reads);
};

_.forEach(config.algorithm, run);

