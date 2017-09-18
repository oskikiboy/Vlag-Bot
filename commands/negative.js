exports.run = async (bot, msg, suffix) => {
	msg.channel.send({
		embed: {
			color: 0x3669FA,
			description: `O Fuck, @PositiveTerminator#1633 has been exposed *shocker*`,
			image: {
				url: `http://weknowmemes.com/wp-content/uploads/2013/12/oh-for-fucks-sake-gif-1.gif`,
			},
		},
	});
};
