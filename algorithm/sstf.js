var _ = require('lodash');

module.exports = function () {
	return function sstf(needlePos, q, read, done) {
		var min = _.min(q, function (el) {
			return Math.abs(el-needlePos);
		});

		read(min);

		setImmediate(done);
	};
};
