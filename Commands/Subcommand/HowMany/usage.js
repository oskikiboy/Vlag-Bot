const Subcommand = require("../Subcommand.js");

module.exports = class HowManyUsage extends Subcommand {
	async run({ msg, suffix }) {
		let totalUsage = this.client.commandUsage.array().reduce((sum, val) => sum + val, 0);
		let array = this.client.commandUsage.sort((_, __, c, d) => c.charCodeAt(0) - d.charCodeAt(0) || c.charCodeAt(1) - d.charCodeAt(1) || c.charCodeAt(2) - d.charCodeAt(2))
			.map((value, key) => `**»** ${key}: ran **${value}** time${value === 1 ? "" : "s"}`);
		let arrayFields = array.chunk(10);
		let fields = [];
		for (const split of arrayFields) {
			fields.push(
				{
					name: `Usage - Part ${arrayFields.indexOf(split)}`,
					value: split.join("\n"),
					inline: true,
				},
			);
		}
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				title: `${totalUsage} total commands were run so far!`,
				fields,
			},
		});
	}
};
