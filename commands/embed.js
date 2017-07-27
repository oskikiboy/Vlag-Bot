exports.run = async (bot, msg, suffix) => {
	msg.channel.send({
		embed: {
			color: 0x3669FA,
			author: {
				name: `${msg.author.tag} requested an embed`,
				icon_url: msg.author.displayAvatarURL,
			},
			image: {
				url: suffix.trim(),
			},
		},
	});
};
