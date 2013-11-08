var algos = require('./algorithms.js');
var Disc = require('./Disc.js');

var reads = [7,0,1,2];
(new Disc(algos['scan'], 5, 14)).request(reads);
(new Disc(algos['look'], 5, 14)).request(reads);
