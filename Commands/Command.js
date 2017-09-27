module.exports = class Command {
	constructor(client, commandData) {
		this.client = client;
		this.commandData = commandData;
	}
	/**
	 * Utility function to determine if a command can run
	 * @returns {Boolean}
	 */
	requirements() {
		return true;
	}

	/**
	 * The main command function.
	 */
	async run() {
		throw new Error(`The ${this.constructor.name} command doesn't have a run function!`);
	}

	async _run(params = {}) {
		if (this.requirements(params)) await this.run(params);
		else this.requirementsFail(params);
	}
	// eslint-disable-next-line no-empty-function
	requirementsFail() {	}

	// eslint-disable-next-line no-empty-function
	notMaintainer() { }
};

