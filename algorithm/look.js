var _ = require('lodash');
var dir = require('../config.json').startingDirection;
if (_.isNumber(dir)) {
	var dir = dir>0 ? 1 : -1;
} else {
	dir = false;
}

module.exports = function () {
	var direction = dir ? dir : (Math.random()>0.5 ? 1 : -1);

	return function look(needlePos, q, read, done) {
		// console.log('reading @', needlePos, 'going', direction==1 ? 'TOP' : 'BOTTOM');

		var onWay = _.any(q, function (el) {
			return direction*needlePos<direction*el;
		});

		if (onWay) {
			read(needlePos) || read(needlePos+direction);
		} else {
			direction*=-1;
		}

		setImmediate(done);
	};
};
