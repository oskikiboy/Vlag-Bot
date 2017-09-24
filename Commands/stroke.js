const Command = require("./Command.js");

module.exports = class Stroke extends Command {
	requirements({ msg, suffix }) {
		if (msg.mentions.users.size) return true;
		return false;
	}

	requirementsFail({ msg, suffix }) {
		msg.channel.send({
			embed: {
				color: 0xFF0000,
				description: `You..don't think you can stroke yourself..do you..? ${config.emojis.hadenFacepalm}`,
			},
		});
	}

	async run({ msg, suffix }) {
		let mentions = msg.mentions.users;
		if (mentions.size > 1) {
			let string = mentions.array().join(", ");
			string = string.trim().replace(/,\s([^,]+)$/, " and $1");
			let randomStrokeQuotes = [
				"Is this even legal!?",
				"Holy mother of porn!",
				"I didn't know you like doing this soo much.. >.>",
				"Wow, chill out! Leave some for others!",
			];
			let randomQuote = randomStrokeQuotes[Math.floor(Math.random() * randomStrokeQuotes.length)];
			msg.channel.send({
				embed: {
					color: 0x3669FA,
					title: randomQuote,
					description: `\n*${msg.author} walks up behind ${string}, gently pulls their pants down, reaches around and caresses them lovingly..*\nIt's a gangbang, I'll tell you that much!`,
				},
			});
		} else if (mentions.first()) {
			msg.channel.send({
				embed: {
					color: 0x3669FA,
					description: `*${msg.author} walks up behind ${mentions.first()}, gently pulls their pants down, reaches around and caresses them lovingly*`,
				},
			});
		}
	}
};

