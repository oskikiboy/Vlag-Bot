const Command = require("./Command.js");

module.exports = class Help extends Command {
	async run({ msg, suffix }) {
		if (suffix) {
			suffix = suffix.trim().toLowerCase();
			let array = suffix.split(" ");
			if (array.length === 1) {
				let cmd = this.client.getCommandName(String(array[0]));
				const commandData = cmd ? cmd === "help" ? this.commandData : this.client.getCommandInfo(cmd) : null;
				if (commandData) {
					msg.channel.send({
						embed: {
							color: 0x3669FA,
							description: this.commandTemplate(cmd, commandData.aliases, commandData.usage, commandData.maintainer, commandData.description, commandData.category),
						},
					});
				} else {
					msg.channel.send({
						embed: {
							color: 0xFF0000,
							title: `Unknown Command!`,
							description: `\`${array[0]}\` was not recognized as a valid command!`,
						},
					});
				}
			} else if (array.length > 1) {
				for (let i = 0; i < array.length; i++) {
					let cmd = this.client.getCommandName(array[i]);
					if (cmd) array[i] = cmd;
				}
				let fields = [];
				let chunkedFields = [];
				array.forEach(cmd => {
					let commandData = cmd === "help" ? this.commandData : this.client.getCommandInfo(cmd);
					if (commandData) fields.push(this.fieldCommandTemplate(cmd, commandData.aliases, commandData.usage, commandData.maintainer, commandData.description, commandData.category));
				});
				chunkedFields = fields.chunk(25);
				if (chunkedFields.length) {
					for (const splitFields of chunkedFields) {
						msg.channel.send({
							embed: {
								color: 0x3669FA,
								fields: splitFields,
							},
						});
					}
				}
			}
		} else {
			try {
				await msg.react(`✅`);
			} catch (err) {
				// Whatever
			}
			const sendCmds = {};
			Object.keys(commands).forEach(command => {
				let commandData = this.client.getCommandInfo(command);
				if (typeof commandData.category !== "undefined" || commandData.category) {
					if (!sendCmds[commandData.category]) sendCmds[commandData.category] = [];
					sendCmds[commandData.category].push(`${command} - ${commandData.usage || "No usage"}`);
				}
			});
			try {
				await msg.author.send({
					embed: {
						color: 0x3669FA,
						description: `Here are all the commands!\nParameters in \`[]\` are optional, while parameters in \`<>\` are requried.\nAny command that takes \`...value\` means that you can provide as many values as you want, separated by spaces, unless shown otherwise!`,
					},
				});
				Object.keys(sendCmds).sort().forEach(category => {
					msg.author.send({
						embed: {
							color: 0x3669FA,
							title: `Commands in category ${category}`,
							description: `\`\`\`css\n${sendCmds[category].sort().join("\n")}\`\`\``,
						},
					});
				});
			} catch (err) {
				try {
					await msg.reactions.get("✅").remove();
				} catch (err2) {
					// Ignore this
				}
				msg.reply(`I was unable to DM you the help. You probably have DM's closed for non-friends. Please open them!`);
			}
		}
	}

	commandTemplate(command, aliases, usage, maintainer, description, category) {
		const string = `**»** Help for command **"${command}"**
Category: **${category}**
Description: \`${description || "No description"}\`
Usage: \`${usage !== "" ? usage : "No usage info"}\`
Aliases: \`${aliases.join(", ") || "No aliases"}\`
Maintainer: **${maintainer}**
`;
		return string;
	}

	fieldCommandTemplate(command, aliases, usage, maintainer, description, category, inline = true) {
		let thing = this.commandTemplate(command, aliases, usage, maintainer, description, category);
		let otherThing = thing.split("\n");
		return {
			name: otherThing[0],
			value: otherThing.splice(1).join("\n"),
			inline,
		};
	}
};

