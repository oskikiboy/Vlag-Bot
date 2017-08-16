exports.run = async (bot, msg, suffix) => {
	let mentions = msg.mentions.users;
	if (mentions.size > 1) {
		let string = mentions.array().join(", ");
		string = string.trim().replace(/,\s([^,]+)$/, " and $1");
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `It has been confirmed..\n${string} are **gay**, and ${msg.author.toString()} knows it!`,
			},
		});
	} else if (mentions.first()) {
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `It has been confirmed.. ${mentions.first().toString()} is **gay**, and ${msg.author.toString()} knows it!`,
			},
		});
	} else {
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `I thought I should let you know that ${msg.author.toString()} **is Gay and European**.`,
			},
		});
	}
};
