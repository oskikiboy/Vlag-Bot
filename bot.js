const Discord = require("discord.js");
global.config = require("./config.js");
const commands = require("./commands.js");
let usage = 0;
exports.usage = usage;

const bot = new Discord.Client({
	fetchAllMembers: true,
	disabledEvents: [
		"MESSAGE_DELETE_BULK",
		"TYPING_START",
	],
});

const switchPlayingGame = (user = bot.user) => {
	if (config.playingQuotes.length > 2) {
		let randomQuote = Math.floor(Math.random() * config.playingQuotes.length);
		console.log(`Changed my shitty playing quote to "${config.playingQuotes[randomQuote]}"`);
		user.setGame(config.playingQuotes[randomQuote]);
		setTimeout(switchPlayingGame, 450000);
	}
}

bot.login(config.token).then(token => {
	console.log("I'm online");
}).catch(err => {
	console.error(`You incapable fucktard. Theres been an error dammit!\n`, err);
});

bot.once("ready", () => {
	console.log(`I'm in ${bot.guilds.size} guilds with ${bot.users.size} total users. Smh..`);
	switchPlayingGame(bot.user);
});

bot.on("message", async msg => {
	if (msg.content.toLowerCase().trim() === "me me big boy") {
		return msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `me me big BOT ${msg.author}`,
			},
		});
	}
	if (msg.content.startsWith(config.prefix)) {
		/*
		 * Any complains about my code will be ignored kek
		 */
		let cmd = msg.content.substring(config.prefix.length).split(" ")[0].trim().toLowerCase();
		let suffix = msg.content.substring(cmd.length + 2).trim();
		for (const command in commands) {
			if (cmd === command) {
				usage++;
				try {
					await msg.delete();
				} catch (err) {
					// Ignore Error
				}
				if (commands[command].maintainer) {
					if (config.maintainers.includes(msg.author.id)) {
						try {
							console.log(`${msg.author.tag} ran ${command} in ${msg.guild.name}`);
							return await require(`./commands/${command}.js`).run(bot, msg, suffix);
						} catch (err) {
							console.error(err);
						}
					} else {
						console.error(`Blocked ${msg.author.tag} from running ${command} as he / she isn't a maintainer.`);
					}
				} else {
					try {
						console.log(`${msg.author.tag} ran ${command} in ${msg.guild.name}`);
						return await require(`./commands/${command}.js`).run(bot, msg, suffix);
					} catch (err) {
						console.error(err);
					}
				}
			}
			for (const alias of commands[command].aliases) {
				if (cmd === alias) {
					usage++;
					try {
						await msg.delete();
					} catch (err) {
						// Ignore Error
					}
					if (commands[command].maintainer) {
						if (config.maintainers.includes(msg.author.id)) {
							try {
								console.log(`${msg.author.tag} ran ${command} in ${msg.guild.name}`);
								await require(`./commands/${command}.js`).run(bot, msg, suffix);
							} catch (err) {
								console.error(err);
							}
						} else {
							console.error(`Blocked ${msg.author.tag} from running ${command} as he / she isn't a maintainer.`);
						}
					} else {
						try {
							console.log(`${msg.author.tag} ran ${command} in ${msg.guild.name}`);
							await require(`./commands/${command}.js`).run(bot, msg, suffix);
						} catch (err) {
							console.error(err);
						}
					}
				}
			}
		}
	}
});
