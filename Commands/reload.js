const Command = require("./Command.js");
const commands = Object.keys(require("../Configs/commands.js"));

module.exports = class Reload extends Command {
	requirements({ msg, suffix }) {
		if (!suffix) return false;
		if (suffix.trim().toLowerCase() === "all") return true;
		let split = suffix.toLowerCase().trim().split(" ");
		let match = [];
		for (const cmd of split) if (commands.includes(cmd)) match.push(cmd);
		if (match.length > 0) return true;
		return false;
	}

	requirementsFail({ msg, suffix }) {
		msg.channel.send({
			embed: {
				color: 0xFF0000,
				description: `Huh? Either the command(s) you provided were inexistent or you didn't provide a suffix!`,
				footer: {
					text: `You can reload multiple commands by spacing them out, or reload everything by running "${config.prefix}reload all"`,
				},
			},
		});
	}

	async run({ msg, suffix }) {
		if (suffix === "all") {
			this.bot.reloadConfigs();
			return msg.channel.send({
				embed: {
					color: 0x00FF00,
					title: `Reloaded everything!`,
					description: `All commands and settings have been reloaded!\nCheck the console to see if there were any errors!`,
				},
			});
		}
		let args = suffix.split(" ");
		let reloaded = [], errored = [];
		for (let i = 0; i < args.length; i++) {
			if (args[i] === "all") continue;
			if (!commands.includes(args[i])) continue;
			await this.bot.reloadCommand(args[i]).then(() => {
				reloaded.push(args[i]);
			}).catch(err => {
				errored.push({
					error: err.message,
					cmd: args[i],
				});
			});
		}
		if (reloaded.length && !errored.length) {
			return msg.channel.send({
				embed: {
					color: 0x00FF00,
					description: `The following commands were reloaded successfully: 🎉\`\`\`css\n${reloaded.join("\n")}\`\`\``,
				},
			});
		} else if (!reloaded.length && errored.length) {
			let array = [];
			errored.forEach(errObj => {
				array.push(`» ${errObj.cmd}\nError: ${errObj.error}`);
			});
			return msg.channel.send({
				embed: {
					color: 0xFF0000,
					description: `The following commands couldn't be reloaded: 🙁\`\`\`css\n${array.join("\n")}\`\`\``,
				},
			});
		} else if (reloaded.length && errored.length) {
			let array = [];
			errored.forEach(errObj => {
				array.push(`» ${errObj.cmd}\nError: ${errObj.error}`);
			});
			return msg.channel.send({
				embed: {
					color: 0xFFFF00,
					fields: [
						{
							name: `The following commands were reloaded successfully: 🎉`,
							value: `\`\`\`css\n${reloaded.join("\n")} `,
						},
						{
							name: `The following commands couldn't be reloaded: 🙁\`\`\`css\n${array.join("\n")}\`\`\``,
						},
					],
				},
			});
		} else {
			console.log("edge case wtf");
			console.log(reloaded, errored);
		}
	}
};

