const Subcommand = require("../Subcommand.js");

module.exports = class Commands extends Subcommand {
	async run({ msg, suffix }) {
		let totalCommands = Object.keys(commands).length;
		let array = Object.keys(commands).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
		array.shift();
		array = array.map(cmd => `**»** ${cmd}`);
		let arrayFields = array.chunk(10);
		let fields = [];
		for (const split of arrayFields) {
			fields.push(
				{
					name: `Commands - Part ${arrayFields.indexOf(split)}`,
					value: split.join("\n"),
					inline: true,
				},
			);
		}
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				title: `There are ${totalCommands - 1} commands!`,
				fields,
			},
		});
	}
};
