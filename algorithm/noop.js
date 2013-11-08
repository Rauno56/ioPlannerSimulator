var _ = require('lodash');

module.exports = function () {
	return function noop(startpos, q, read, done) {
		read(q[0]);
		setImmediate(done);
	};
};
