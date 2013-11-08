var _ = require('lodash');

module.exports = function () {
	return function cscan(needlePos, q, read, done) {
		if ((read(needlePos) || read(needlePos+1))=='OUT OF RANGE') {
			read(0);
		}

		setImmediate(done);
	};
};
