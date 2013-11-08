var algos = require('./algorithms.js');
var Disc = require('./Disc.js');

var reads = [9,0,9,0,9,0];
(new Disc(algos['noop'], 5, 10)).request(reads);
(new Disc(algos['sstf'], 5, 10)).request(reads);