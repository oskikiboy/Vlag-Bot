exports.run = async (bot, msg, suffix) => {
	let array = [
		"https://s20.postimg.org/9wkyybbp9/haden_why_AAA_1.png",
		"https://s20.postimg.org/3kaf27y0t/haden_bulge_1.png",
	];
	msg.channel.send({
		embed: {
			color: 0x3669FA,
			description: `<@144260472575754241> nice underware.`,
			image: {
				url: array[Math.floor(Math.random() * array.length)],
			},
		},
	});
};
