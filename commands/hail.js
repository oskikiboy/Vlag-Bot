exports.run = async (bot, msg, suffix) => {
	let mention = msg.mentions.users.first();
	if (mention) {
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `${msg.author.toString()} forces ${mention.toString()} to hail our Lord and Saviour <@139836912335716352>.`,
			},
		});
	} else {
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `${msg.author.toString()} hails our Lord and Saviour <@139836912335716352>.`,
			},
		});
	}
};
