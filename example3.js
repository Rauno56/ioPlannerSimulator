var algos = require('./algorithms.js');
var Disc = require('./Disc.js');

var reads = [9,6,4];
(new Disc(algos['clook'], 5, 10)).request(reads);
(new Disc(algos['look'], 5, 10)).request(reads);
