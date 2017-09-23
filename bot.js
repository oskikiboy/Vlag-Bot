const VBotClient = require("./Client.js");

const bot = new VBotClient({
	fetchAllMembers: true,
	disabledEvents: [
		"TYPING_START",
	],
});

Object.defineProperty(Array.prototype, "chunk", {
	value: function value(n) {
		return Array.from(Array(Math.ceil(this.length / n)), (_, i) => this.slice(i * n, (i * n) + n));
	},
});

/**
 * Escapes all possible RegExp variables from the string
 * @returns {String} The escaped String
 */
Object.assign(String.prototype, {
	escapeRegex() {
		const matchOperators = /[|\\{}()[\]^$+*?.]/g;
		return this.replace(matchOperators, "\\$&");
	},
});

bot.once("ready", () => {
	bot.logEvent({ event: "READY", shortMessage: `Logged in as ${bot.user.tag}!` });
	bot.isReady = true;
	bot.reloadAllCommands();
	bot.startPlayingStatus();
});

bot.on("message", async msg => {
	if (msg.author.bot) return;
	if (msg.content.toLowerCase().trim() === "me me big boy") {
		return msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `me me big BOT ${msg.author}`,
			},
		});
	}
	if (msg.guild) {
		await msg.guild.members.fetch();
		if (config.deleteMessage) {
			try {
				await msg.delete();
			} catch (err) {
				bot.logEvent({ event: "DEL_CMD_MSG", shortMessage: `Couldn't delete the command message!`, args: [err.message] });
			}
		}
	}
	const msgObject = await bot.checkCommandTag(msg.content);
	const { command, suffix } = msgObject;
	if (msgObject && command !== null) {
		let cmd = bot.getCommand(command);
		let cmdinfo = bot.getCommandInfo(command);
		if (cmdinfo.maintainer && !bot.isMaintainer(msg.author)) {
			bot.logCommand({ command, ran: false, reason: `the user isn't a maintainer!`, user: msg.author.tag, userID: msg.author.id, guild: msg.guild ? msg.guild.name : null, guildID: msg.guild ? msg.guild.id : null, channel: msg.guild ? msg.channel.name : null, channelID: msg.channel.id, suffix: suffix });
			return (new cmd(bot, cmdinfo)).notMaintainer({ msg, suffix });
		} else if (cmdinfo.maintainer && bot.isMaintainer(msg.author)) {
			bot.logCommand({ command, user: msg.author.tag, userID: msg.author.id, guild: msg.guild ? msg.guild.name : null, guildID: msg.guild ? msg.guild.id : null, channel: msg.guild ? msg.channel.name : null, channelID: msg.channel.id, suffix: suffix });
			return (new cmd(bot, cmdinfo))._run({ msg: msg, suffix: suffix });
		} else {
			bot.logCommand({ command, user: msg.author.tag, userID: msg.author.id, guild: msg.guild ? msg.guild.name : null, guildID: msg.guild ? msg.guild.id : null, channel: msg.guild ? msg.channel.name : null, channelID: msg.channel.id, suffix: suffix });
			return (new cmd(bot, cmdinfo))._run({ msg: msg, suffix: suffix });
		}
	}
});

bot.login(config.token);
