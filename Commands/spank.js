const Command = require("./Command.js");

module.exports = class Spank extends Command {
	requirements({ msg, suffix }) {
		if (msg.mentions.users.size) return true;
		return false;
	}

	requirementsFail({ msg, suffix }) {
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `You can't spank yourself dammit. That would be weird.. ${config.emojis.hadenFacepalm}`,
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
					description: `*Wow. you must like booty!\n${msg.author} spanked ${string} asses.*`,
					footer: {
						text: `That's a total of ${mentions.size} asses for you people who were curious!`,
					},
				},
			});
		} else if (mentions.first()) {
			msg.channel.send({
				embed: {
					color: 0x3669FA,
					description: `*${msg.author} spanked ${mentions.first()}'s ass!*`,
					footer: {
						text: `The booty jiggled slightly..`,
					},
				},
			});
		}
	}
};

