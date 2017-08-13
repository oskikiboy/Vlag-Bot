exports.run = async (bot, msg, suffix) => {
	msg.channel.send({
		embed: {
			color: 0x002e59,
			description: `<@195252536389664768> is a server. If you sexually harass him, I (<@337976415482019840> and <@195252536389664768>) will take appropriate legal action to make sure that you will not do this to another server again.\nIf you do continue that behaviour then the legal system will make sure that you will not do that to another server by putting you in jail for an extended amount of time.`,
		},
	});
};
