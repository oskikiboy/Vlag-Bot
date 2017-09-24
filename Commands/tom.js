const Command = require("./Command.js");

module.exports = class BadFish extends Command {
	async run({ msg, suffix }) {
		msg.channel.send({
			embed: {
				color: 0x002e59,
				description: `<@101588913746890752> bad fish \\🐟`,
			},
		});
	}
};

