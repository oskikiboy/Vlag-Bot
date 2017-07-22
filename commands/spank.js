exports.run = async (bot, msg, suffix) => {
	let mentions = msg.mentions.users;
	if (mentions.size > 1) {
		let string = mentions.array().join(", ");
		string = string.trim().replace(/,\s([^,]+)$/, " and $1");
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `*Wow, what a huge spanking!\n${msg.author.toString()} spanked ${mentions.size} people!\nThe spanked ones are ${string}*`,
			},
		});
	} else if (mentions.first()) {
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `*${msg.author.toString()} spanked ${mentions.first().toString()}'s ass${Math.floor(Math.random() * 4) > 1 ? " so hard they shat themselves!*": "*"}`,
			},
		});
	} else {
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `You can't spank yourself dammit. That would be weird.. ${config.emojis.facepalm}`
			}
		});
	}
};
