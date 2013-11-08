var _ = require('lodash');

module.exports = function () {
	return function clook(needlePos, q, read, done) {
		var onWay = _.any(q, function (el) {
			return needlePos<el;
		});

		if (onWay) {
			read(needlePos) || read(needlePos+1);
		} else {
			read(0);
		}

		setImmediate(done);
	};
};
