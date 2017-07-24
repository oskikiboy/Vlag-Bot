exports.run = async (bot, msg, suffix) => {
	msg.channel.send({
		embed: {
			image: {
				url: `https://s20.postimg.org/el5k78q9p/haden_wtf_1.png`,
			},
			color: 0x3669FA,
			description: `Oops, looks like <@144260472575754241> dropped his balls. ¯\\_(ツ)_/¯`,
		},
	});
}
