var _ = require('lodash');
var dir = require('../config.json').startingDirection;
if (_.isNumber(dir)) {
	var dir = dir>0 ? 1 : -1;
} else {
	dir = false;
}

module.exports = function () {
	var direction = dir ? dir : (Math.random()>0.5 ? 1 : -1);

	return function scan(needlePos, q, read, done) {
		// console.log('reading @', needlePos, 'going', direction==1 ? 'TOP' : 'BOTTOM');

		if ((read(needlePos) || read(needlePos+direction))=='OUT OF RANGE') {
			direction*=-1;
		}

		setImmediate(done);
	};
};
