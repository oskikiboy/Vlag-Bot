exports.run = async (bot, msg, suffix) => {
	msg.channel.send({
		embed: {
			color: 0x3669FA,
			description: `${msg.author.toString()} is praying to our Lord and Saviour <@139836912335716352>. 🙏`,
		},
	});
};
