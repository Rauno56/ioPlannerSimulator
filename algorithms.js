

var algos = module.exports = {};

algos.fcfs = algos.noop = require('./algorithm/noop.js');
algos.sstf = require('./algorithm/sstf.js');
algos.scan = require('./algorithm/scan.js');
algos.cscan = require('./algorithm/cscan.js');
algos.look = require('./algorithm/look.js');
algos.clook = require('./algorithm/clook.js');
