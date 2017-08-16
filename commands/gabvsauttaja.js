exports.run = async (bot, msg, suffix) => {
	msg.channel.send({
		embed: {
			color: 0x00FF00,
			description: `Both [GAwesomeBot](https://gawesomebot.com) and [Auttaja](https://auttaja.us) are very good bots. Theres no need to say \`Auttaja is better\` or \`GAwesomeBot is better\`, both bots do what they need to do, and do it *decently* well.\n\nAlso, fuck off with "GAwesomeBot is slow!!one1". Self host it if you need speed.`,
		},
	});
};
