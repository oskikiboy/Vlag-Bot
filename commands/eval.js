const Command = require("./Command.js");

module.exports = class Eval extends Command {
	requirements({ msg, suffix }) {
		if (!suffix) return false;
		return true;
	}

	async run({ msg, suffix }) {
		try {
			if (suffix.startsWith("```js") && suffix.endsWith("```")) suffix = suffix.substring(5, suffix.length - 3);
			const asyncify = code => `(async () => {\nreturn ${code}\n})()`;
			let result = await eval(asyncify(suffix));
			if (typeof result !== "string") result = require("util").inspect(result, false, 2);
			let array = [
				this.bot.token.escapeRegex(),
				config.token.escapeRegex(),
			];
			let regex = new RegExp(array.join("|"), "g");
			result = result.replace(regex, "Vlag Dissaproves");
			msg.channel.send({
				embed: {
					color: 0x00FF00,
					description: `\`\`\`js\n${result}\`\`\``,
				},
			});
		} catch (err) {
			msg.channel.send({
				embed: {
					color: 0xFF0000,
					description: `\`\`\`js\n${err.stack}\`\`\``,
				},
			});
		}
	}

	requirementsFail({ msg, suffix }) {
		msg.channel.send({
			embed: {
				color: 0xFF0000,
				description: `What do you want me to evaluate? ${config.emojis.hadenFacepalm}`,
			},
		});
	}
};
