const Command = require("./Command.js");

module.exports = class Hail extends Command {
	requirements({ msg, suffix }) {
		if (msg.mentions.users.first()) return true;
		return false;
	}

	requirementsFail({ msg, suffix }) {
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `${msg.author} hails our Lord and Saviour <@139836912335716352>.`,
			},
		});
	}

	async run({ msg, suffix }) {
		let mention = msg.mentions.users.first();
		if (mention) {
			msg.channel.send({
				embed: {
					color: 0x3669FA,
					description: `${msg.author} forces ${mention} to hail our Lord and Saviour <@139836912335716352>.`,
				},
			});
		}
	}
};

