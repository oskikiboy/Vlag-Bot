exports.run = async (bot, msg, suffix) => {
	let mentions = msg.mentions.users;
	if (mentions.size > 2) {
		msg.channel.send({
			embed: {
				color: 0xd9534f,
				description: `Woah there, keep your dicks for yourselves.\nYou can't fuck with more than 2 people, your ass hole would become a crater! ${config.emojis.facepalm}`,
			},
		});
	} else if (mentions.size > 1) {
		let string = mentions.array().join(", ");
		string = string.trim().replace(/,\s([^,]+)$/, " and $1");
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `${msg.author.toString()} is fucking with ${string}.\nThey seem to enjoy it.. ${config.emojis.lennythink}`,
			},
		});
	} else if (mentions.first()) {
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `${msg.author.toString()} is fucking ${mentions.first().toString()}.. or was it the other way around..?`,
			},
		});
	} else {
		msg.channel.send({
			embed: {
				color: 0xd9534f,
				description: `As much as I'd want to see you fucking yourself, that would be against the law.. Please tell me who you'd want to fuck with. ${config.emojis.facepalm}`,
			},
		});
	}
};
