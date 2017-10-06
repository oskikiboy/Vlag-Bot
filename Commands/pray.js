const Command = require("./Command.js");

module.exports = class Pray extends Command {
	async run({ msg, suffix }) {
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `${msg.author} is praying to our Lord and Saviour <@139836912335716352>. 🙏`,
			},
		});
	}
};
