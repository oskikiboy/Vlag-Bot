exports.run = async (bot, msg, suffix) => {
	if (suffix) {
		try {
			if (suffix.startsWith("```js") && suffix.endsWith("```")) {
				suffix = suffix.substring(5, suffix.length - 3);
			}
			const asyncCode = code => `(async () => {\nreturn ${code}\n})()`;
			let result = await eval(asyncCode(suffix));
			if (typeof result !== "string") result = require("util").inspect(result, false, 2);
			result = result.replace(new RegExp(`${bot.token}|${config.token}`, "g"), "Vlag Dissaproves");
			msg.channel.send({
				embed: {
					description: `\`\`\`js\n${result}\`\`\``,
					color: 0x3669FA,
				},
			});
		} catch (err) {
			msg.channel.send({
				embed: {
					description: `\`\`\`js\n${err}\`\`\``,
					color: 0xFF0000,
				},
			});
		}
	} else {
		msg.channel.send({
			embed: {
				description: `You want me to evaluate what? A dick up my ass? Smh.. ${config.emojis.facepalm}`,
				color: 0xFF0000,
			},
		});
	}
};
