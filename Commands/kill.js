const Command = require("./Command.js");

module.exports = class Kill extends Command {
	requirements({ msg, suffix }) {
		if (msg.mentions.users) return true;
		return false;
	}

	requirementsFail({ msg, suffix }) {
		msg.channel.send({
			embed: {
				color: 0xFF0000,
				description: `<:kys:338657323470028800> isn't an option. Who do you want to kill? 🔪`,
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
					color: 0x830303,
					title: `It's a crime scene!`,
					description: `${msg.author} killed ${string}.. 🔪`,
				},
			});
		} else if (mentions.first()) {
			msg.channel.send({
				embed: {
					color: 0x830303,
					description: `${msg.author} killed ${mentions.first()}.. 🔪`,
				},
			});
		}
	}
};

