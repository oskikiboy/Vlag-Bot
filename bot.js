require("fastboot");

const VBotClient = require("./Client.js");

const client = new VBotClient({
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

client.once("ready", () => {
	client.logEvent({ event: "READY", shortMessage: `Logged in as ${client.user.tag}!` });
	client.isReady = true;
	client.reloadAllCommands();
	client.startPlayingStatus();
	for (const cmd of Object.keys(require("./Configs/commands.js"))) {
		if (cmd.startsWith("_") || cmd === "Command") continue;
		client.commandUsage.set(cmd, 0);
	}
});

client.on("message", async msg => {
	if (msg.author.bot) return;
	if (msg.content.toLowerCase().trim() === "me me big boy") {
		return msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `me me big BOT ${msg.author}`,
			},
		});
	}
	if (!validateMsg(msg)) return;
	const msgObject = client.checkCommandTag(msg.content);
	let { command, suffix } = msgObject;
	if (msgObject && command !== null) {
		let cmd = client.getCommand(command);
		let cmdinfo = client.getCommandInfo(command);
		command = client.getCommandName(command);
		if (cmdinfo) deleteCommandMessage(msg);
		if (cmdinfo && cmdinfo.maintainer && !client.isMaintainer(msg.author.id)) {
			client.logCommand({ command, ran: false, reason: `the user isn't a maintainer!`, user: msg.author.tag, userID: msg.author.id, guild: msg.guild ? msg.guild.name : null, guildID: msg.guild ? msg.guild.id : null, channel: msg.guild ? msg.channel.name : null, channelID: msg.channel.id, suffix: suffix });
			(new cmd(client, cmdinfo)).notMaintainer({ msg: msg, suffix: suffix });
		} else if (cmdinfo && cmdinfo.maintainer && client.isMaintainer(msg.author.id)) {
			client.logCommand({ command, user: msg.author.tag, userID: msg.author.id, guild: msg.guild ? msg.guild.name : null, guildID: msg.guild ? msg.guild.id : null, channel: msg.guild ? msg.channel.name : null, channelID: msg.channel.id, suffix: suffix });
			client.commandUsage.set(command, client.commandUsage.get(command) + 1);
			(new cmd(client, cmdinfo))._run({ msg: msg, suffix: suffix });
		} else if (cmdinfo) {
			client.logCommand({ command, user: msg.author.tag, userID: msg.author.id, guild: msg.guild ? msg.guild.name : null, guildID: msg.guild ? msg.guild.id : null, channel: msg.guild ? msg.channel.name : null, channelID: msg.channel.id, suffix: suffix });
			client.commandUsage.set(command, client.commandUsage.get(command) + 1);
			(new cmd(client, cmdinfo))._run({ msg: msg, suffix: suffix });
		}
	}
});

client.login(config.token).then(() => {
	client.logEvent({ event: "LOGIN", shortMessage: "Logging in!" });
}).catch(err => {
	client.logEvent({ event: "LOGIN", shortMessage: "Failed to log in!", args: [err.message] });
});

function deleteCommandMessage(msg) {
	if (msg.guild) {
		if (config.deleteMessage) {
			msg.delete().catch(err => client.logEvent({ event: "DEL_CMD_MSG", shortMessage: `Couldn't delete the command message!`, args: [err.message] }));
		}
	}
}

function validateMsg(msg) {
	if (config.prefix && msg.content.startsWith(config.prefix)) return true;
	if (config.allowMentionAsPrefix && (msg.content.startsWith(msg.client.toString()) || msg.content.startsWith(`<@!${msg.client.user.id}>`))) return true;
	return false;
}
