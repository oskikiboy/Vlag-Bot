const Command = require("./Command.js");

module.exports = class Fuck extends Command {
	requirements({ msg, suffix }) {
		if (msg.mentions.users.size) return true;
		return false;
	}

	requirementsFail({ msg, suffix }) {
		msg.channel.send({
			embed: {
				color: 0xFF0000,
				description: `According to all known laws of fucking, there is no way one person could fuck themselves.\nThat being said, please mention someone who you'd want to fuck with.`,
				footer: {
					text: `You can fuck at most 2 other people.`,
				},
			},
		});
	}

	async run({ msg, suffix }) {
		let mentions = msg.mentions.users;
		if (mentions.size > 2) {
			msg.channel.send({
				embed: {
					color: 0xd9534f,
					description: `Woah there, keep your dick for yourself.\nYou can't fuck with more than 2 people, your ass-hole would become a crater! ${config.emojis.hadenFacepalm}`,
				},
			});
		} else if (mentions.length > 1) {
			let string = mentions.array().join(", ");
			string = string.trim().replace(/,\s([^,]+)$/, " and $1");
			msg.channel.send({
				embed: {
					color: 0x3669FA,
					description: `${msg.author} is fucking with ${string}.\nThey seem to enjoy it.. 😏`,
				},
			});
		} else if (mentions.first()) {
			if (msg.author.id === "139836912335716352" && mentions.first().id === "229373852939976709") {
				msg.channel.send({
					embed: {
						color: 0x00FF00,
						description: `${msg.author} is fucking ${mentions.first()}, furry style!`,
					},
				});
			} else {
				msg.channel.send({
					embed: {
						color: 0x3669FA,
						description: `${msg.author} is fucking ${mentions.first()}.. or was it the other way around..?`,
					},
				});
			}
		}
	}
};

