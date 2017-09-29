const Command = require("./Command.js");

module.exports = class Bless extends Command {
	requirements({ msg, suffix }) {
		if (msg.mentions.users.size) return true;
		return false;
	}

	requirementsFail({ msg, suffix }) {
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `The mighty leader, <@139836912335716352>, blesses you!`,
			},
		});
	}

	async run({ msg, suffix }) {
		let mentions = msg.mentions.users;
		if (mentions.size > 1) {
			let string = mentions.array().join(", ");
			string = string.trim().replace(/,\s([^,]+)$/, " and $1");
			let randomBlessQuotes = [
				"*You get blessed, he gets blessed, everyone gets blessed!*",
				"*Bless up fams!*",
				"*Feel the power!!* ༼ つ ◕_◕ ༽つ\n",
			];
			let randomBlessQuote = randomBlessQuotes[Math.floor(Math.random() * randomBlessQuotes.length)];
			msg.channel.send({
				embed: {
					color: 0x3669FA,
					description: `${randomBlessQuote}\nYour mighty leader, <@139836912335716352>, blesses ${string}`,
				},
			});
		} else if (mentions.first()) {
			msg.channel.send({
				embed: {
					color: 0x3669FA,
					description: `The mightly leader, <@139836912335716352>, blesses ${mentions.first()}`,
				},
			});
		}
	}
};

