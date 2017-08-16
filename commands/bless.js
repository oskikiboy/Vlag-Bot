exports.run = async (bot, msg, suffix) => {
	let mentions = msg.mentions.users;
	if (mentions.size > 1) {
		let string = mentions.array().join(", ");
		string = string.trim().replace(/,\s([^,]+)$/, " and $1");
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `Our mighty leader, <@139836912335716352>, blesses ${string}!`,
			},
		});
	} else if (mentions.first()) {
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `The mightly leader, <@139836912335716352>, blesses ${mentions.first().toString()}!`,
			},
		});
	} else {
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `Your mightly leader, <@139836912335716352>, blesses you!`,
			},
		});
	}
};
