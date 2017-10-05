module.exports = class Subcommand {
	constructor(mainCommand, params = {}) {
		let { client, commandData } = mainCommand;
		this.mainCommand = mainCommand;
		this.client = client;
		this.commandData = commandData;
		this.run(params);
	}

	async run() {
		throw new Error(`The ${this.constructor.name} subcommand doesn't have a run function!`);
	}
};
