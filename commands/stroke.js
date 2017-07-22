exports.run = async (bot, msg, suffix) => {
	let mentions = msg.mentions.users;
	if (mentions.size > 1) {
		let string = mentions.array().join(", ");
		string = string.trim().replace(/,\s([^,]+)$/, " and $1");
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `Holy mother of porn!\n*${msg.author.toString()} walks up behind ${string}, gently pulls their pants down, reaches around and caresses them lovingly..*\nIt's a motherfucking gangbang I'll tell you that much!`
			}
		});
	} else if (mentions.first()) {
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `*${msg.author.toString()} walks up behind ${mentions.first().toString()}, gently pulls they pants down, reaches around and caresses them lovingly*`
			}
		});
	} else {
		msg.channel.send({
			embed: {
				color: 0xFF0000,
				description: `You don't think you can stroke yourself, do you..? ${config.emojis.facepalm}`,
			},
		});
	}
};
