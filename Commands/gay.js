const Command = require("./Command.js");

module.exports = class Gay extends Command {
	requirements({ msg, suffix }) {
		if (msg.mentions.users.size) return true;
		return false;
	}

	requirementsFail({ msg, suffix }) {
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `I thought I should let you know that ${msg.author} **is gay!**`,
				footer: {
					text: `Shocking..right? *Hint: Mention someone next time*`,
				},
			},
		});
	}

	async run({ msg, suffix }) {
		let mentions = msg.mentions.users;
		if (mentions.size > 1) {
			let string = mentions.array().join(", ");
			string = string.trim().replace(/,\s([^,]+)$/, " and $1");
			msg.channel.send({
				embed: {
					color: 0x3669FA,
					description: `It's confirmed..\n${string} are **gay**, and ${msg.author} knows it!`,
				},
			});
		} else if (mentions.first()) {
			msg.channel.send({
				embed: {
					color: 0x3669FA,
					description: `It's confirmed..\n${mentions.first()} is **gay**, and ${msg.author} knows it!`,
				},
			});
		}
	}
};

