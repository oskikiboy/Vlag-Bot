exports.run = async (bot, msg, suffix) => {
	msg.channel.send({
		embed: {
			color: 0x3669FA,
			description: `Yay, I just fixed Twitter. [#iewan64]()`,
			image: {
				url: `https://s20.postimg.org/l6dot9gql/Application_Frame_Host_2017-04-30_20-07-43.png`,
			},
		},
	});
};
