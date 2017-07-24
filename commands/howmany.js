exports.run = async (bot, msg, suffix) => {
	if (suffix.trim().toLowerCase() === "commands" || suffix.trim().toLowerCase() === "cmds") {
		return msg.reply({
			embed: {
				color: 0x3669FA,
				description: `There are ${Object.keys(require("../commands.js")).length} commands.`,
			},
		});
	} else if (suffix.trim().toLowerCase() === "usage") {
		return msg.reply({
			embed: {
				color: 0x3669FA,
				description: `${require("../bot.js").usage} commands were run so far from the last reboot.`,
			},
		});
	}
};
