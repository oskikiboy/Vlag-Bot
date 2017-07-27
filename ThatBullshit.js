module.exports = () => {
	Object.defineProperty(Array.prototype, "chunk", {
		value: n => Array(Math.ceil(this.length / n)).fill().map((_, i) => this.slice(i * n, (i * n) + n))
	});
};
