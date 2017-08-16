exports.run = async (bot, msg, suffix) => {
	msg.channel.send({
		embed: {
			color: 0x3669FA,
			description: `It's mining day bro with that water bucket flow. 500,000 diamonds man; never done before. Passing all the competition DanTDM is next.`,
			thumbnail: {
				url: `https://lazer.cf/assets/lazerbot/minecraft.png`,
			},
			footer: {
				text: `Command by Lazer :)`,
			},
		},
	});
};
