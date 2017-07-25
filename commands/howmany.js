exports.run = async (bot, msg, suffix) => {
	const pretty = object => {
		let array = [];
		const template = (cmd, usage) => `**»** ${cmd}: ran ${usage} time${usage === 1 ? "" : "s"}`;
		for (const res in object) {
			if (res === "total") continue;
			array.push(template(res, object[res]));
		}
		return array;
	};
	if (suffix.trim().toLowerCase() === "commands" || suffix.trim().toLowerCase() === "cmds") {
		return msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `There are \`${Object.keys(require("../commands.js")).length}\` commands.`,
			},
		});
	} else if (suffix.trim().toLowerCase() === "usage") {
		const array = pretty(require("../bot.js").usage);
		return msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `**${require("../bot.js").usage.total}** total commands were run so far from the last reboot.\n${array.join("\n")}`,
			},
		});
	}
};
