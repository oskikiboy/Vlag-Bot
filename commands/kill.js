exports.run = async (bot, msg, suffix) => {
	let mentions = msg.mentions.users;
	if (mentions.size > 1) {
		let string = mentions.array().join(", ");
		string = string.trim().replace(/,\s([^,]+)$/, " and $1");
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `${msg.author} killed ${string}.. :knife:`,
			},
		});
	} else if (mentions.first()) {
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `${msg.author} killed ${mentions.first()}.. :knife:`,
			},
		});
	} else {
		msg.channel.send({
			embed: {
				color: 0xFF0000,
				description: `<:kys:338657323470028800> isn't an option. Who do you want to kill?`,
			},
		});
	}
};
