exports.run = async (bot, msg, suffix) => {
	const m = await msg.channel.send({
		embed: {
			color: 0x3669FA,
			description: `Ping?`,
		},
	});
	return m.edit({
		embed: {
			color: 0x3669FA,
			description: `Pong! Latency: ${Math.floor(bot.ping)}ms`,
			footer: {
				text: `It took ${m.createdTimestamp - msg.createdTimestamp}ms to ping.`,
			},
		},
	});
};
