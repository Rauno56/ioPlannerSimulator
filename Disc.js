var _ = require('lodash');

function Disc(algorithm, needleStart, size) {
	this.size = size || this.size;
	this.needleStart =  needleStart || this.needleStart;
	this.algorithm = algorithm();
	this.clear();
}

Disc.prototype = {
	size: 20,
	q: [],
	processing: false,
	needle: 0,
	needleStart: 0,
	seekLenght: 0,
	readHistory: [],
	request: function (i) {
		if (_.isArray(i)) {
			_.forEach(i, this.request, this);
		} else if (_.isNumber(i) && 0<=i && i<this.size) {
			this.q.push(i);
			// console.log('Added', i, 'to queue.');
		} else {
			console.log('Ignoring request to', i, _.isNumber(i), 0<=i, i<this.size);
		}
		setImmediate(this.process.bind(this));

		return this;
	},
	process: function () {
		if (!this.processing) {
			this.processing = true;
			if (this.algorithm) {
				console.log('processing started(', this.algorithm.name, '):', this.q);
				setImmediate(this._step.bind(this));
			} else {
				throw new Error('Why you no specify algorithm?!?!');
			}
		}
		return this;
	},
	_step: function () {
		if (this.q.length) {
			this.algorithm(this.needle, this.q.slice(0), this.read.bind(this), this._step.bind(this))
		} else {
			this.done();
		}
	},
	read: function (pos) {
		if (pos>=this.size || pos<0) {
			return 'OUT OF RANGE';
		}
		this.seekLenght += Math.abs(this.needle - pos);
		this.needle = pos;
		var i = this.q.indexOf(pos);
		if (~i) {
			// console.log('read', pos);
			this.q.splice(i, 1);
			this.readHistory.push(pos)
			return true;
		}
		if (this.readHistory[this.readHistory.length-1]!=pos) {
			this.readHistory.push(pos);
		}
		return false;
	},
	clear: function () {
		this.needle = this.needleStart;
		this.seekLenght = 0;
		this.q = [];
		this.processing = false;
		this.readHistory = [];
		return this;
	},
	done: function () {
		if (this.processing) {
			this.processing = false;
			console.log('**********************');
			console.log('Algorithm:', this.algorithm.name);
			console.log('**********************');
			console.log('done with ', this.seekLenght, ' units of seek');
			console.log('on a disc with a length of ', this.size);
			console.log('Readhistory: ', this.readHistory);
			console.log('with a q looking like this:  ', this.q);
			console.log('**********************');
			console.log();
		} else {

		}
	}
};

module.exports = Disc;
