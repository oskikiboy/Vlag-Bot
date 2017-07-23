exports.run = async (bot, msg, suffix) => {
	msg.channel.send({
		embed: {
			color: 0x3669FA,
			description: `What are you on about? This bot works better than any bot ever will!`,
		},
	});
};
