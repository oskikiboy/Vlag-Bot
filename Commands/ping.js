const Command = require("./Command.js");

module.exports = class Ping extends Command {
	async run({ msg, suffix }) {
		let hrstart = process.hrtime();
		let now = Date.now();
		const m = await msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `Ping?`,
			},
		});
		return m.edit({
			embed: {
				color: 0x00FF00,
				description: `Pong! It took ${Math.floor((now - msg.createdTimestamp) / 2.5)}ms to ping.`,
				footer: {
					text: `Bot Latency: ${Math.floor(this.client.ping)}ms | Execution time: ${process.hrtime(hrstart)[0]}s ${Math.floor(process.hrtime(hrstart)[1] / 1000000)}ms`,
				},
			},
		});
	}
};
