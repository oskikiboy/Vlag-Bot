const Command = require("./Command.js");

module.exports = class Josh extends Command {
	async run({ msg, suffix }) {
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `<@190445691460517888> has a smol lund. All hail Smol Lund God.`,
			},
		});
	}
};
