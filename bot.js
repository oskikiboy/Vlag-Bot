const Discord = require("discord.js");
const config = require("./config.js");

const bot = new Discord.Client({
	fetchAllMembers: true,
	disabledEvents: [
		"MESSAGE_DELETE_BULK",
		"TYPING_START",
	],
});

const switchPlayingGame = async (user = bot.user) => {
	if (config.playingQuotes.length > 2) {
		let randomQuote = Math.floor(Math.random() * config.playingQuotes.length);
		console.log(`Changed my shitty playing quote to "${config.playingQuotes[randomQuote]}"`);
		user.setGame(config.playingQuotes[randomQuote]);
		setTimeout(switchPlayingGame, 300000);
	}
}

const commands = {
	eval: {
		aliases: ["ev", "evaluate"],
		run: async (msg, suffix) => {
			if (config.maintainers.includes(msg.author.id)) {
				if (suffix) {
					try {
						if (suffix.startsWith("```js") && suffix.endsWith("```")) {
							suffix = suffix.substring(5, suffix.length - 3);
						}
						const asyncCode = code => `(async () => { return ${code}})()`;
						let result = await eval(asyncCode(suffix));
						if (typeof result !== "string") result = require("util").inspect(result, false, 2);
						result = result.replace(new RegExp(`${bot.token}|${config.token}`, "g"), "fuck off");
						msg.channel.send({
							embed: {
								description: `\`\`\`js\n${result}\`\`\``,
								color: 0x3669FA
							}
						});
					} catch (err) {
						msg.channel.send({
							embed: {
								description: `\`\`\`js\n${err}\`\`\``,
								color: 0xFF0000
							}
						});
					}
				} else {
					msg.channel.send({
						embed: {
							description: `You want me to evaluate what? A dick up my ass? Smh.. ${config.emojis.facepalm}`,
							color: 0xFF0000
						}
					})
				}
			}
		}
	},
	kingdgrizzle: {
		aliases: ["kingd", "kdg"],
		run: async (msg, suffix) => {
			msg.channel.send("My name is KingDGrizzle, and I've got a starter YouTube channel! I'm trying my best to do amazing content for you, but if it's not amazing, then I'm sorry, I'm trying my best!! I've got social media too! Check it out!");
		}
	},
	gay: {
		aliases: ["gey", "guy"],
		run: async (msg, suffix) => {
			let mentions = msg.mentions.users;
			if (mentions.size > 1) {
				let string = mentions.array().join(", ");
				string = string.trim().replace(/,\s([^,]+)$/, " and $1");
				msg.channel.send({
					embed: {
						color: 0x3669FA,
						description: `It has been confirmed..\n${string} are **gay**, and ${msg.author.toString()} knows it!`,
					},
				});
			} else if (mentions.first()) {
				msg.channel.send({
					embed: {
						color: 0x3669FA,
						description: `It has been confirmed.. ${mentions.first().toString()} is **gay**, and ${msg.author.toString()} knows it!`,
					},
				});
			} else {
				msg.channel.send({
					embed: {
						color: 0x3669FA,
						description: `I thought I should let you know that ${msg.author.toString()} **is Gay and European**.`
					}
				});
			}
		}
	},
	spank: {
		aliases: ["spanking", "spankin", "spunk"],
		run: async (msg, suffix) => {
			let mentions = msg.mentions.users;
			if (mentions.size > 1) {
				let string = mentions.array().join(", ");
				string = string.trim().replace(/,\s([^,]+)$/, " and $1");
				msg.channel.send({
					embed: {
						color: 0x3669FA,
						description: `*Wow, what a huge spanking!\n${msg.author.toString()} spanked ${mentions.size} people!\nThe spanked ones are ${string}*`,
					},
				});
			} else if (mentions.first()) {
				msg.channel.send({
					embed: {
						color: 0x3669FA,
						description: `*${msg.author.toString()} spanked ${mentions.first().toString()}'s ass${Math.floor(Math.random() * 2) > 1 ? " so hard they shat themselves!*": "*"}`,
					},
				});
			} else {
				msg.channel.send({
					embed: {
						color: 0x3669FA,
						description: `You can't spank yourself dammit. That would be weird.. ${config.emojis.facepalm}`
					}
				});
			}
		}
	},
	vlag: {
		aliases: ["blag", "vlad"],
		run: async (msg, suffix) => {
			msg.channel.send(`All hail our mighty leader, <@139836912335716352>!`)
		}
	},
	bless: {
		aliases: ["blessup", "bloss", "blesses"],
		run: async (msg, suffix) => {
			let mentions = msg.mentions.users;
			if (mentions.size > 1) {
				let string = mentions.array().join(", ");
				string = string.trim().replace(/,\s([^,]+)$/, " and $1");
				msg.channel.send({
					embed: {
						color: 0x3669FA,
						description: `Our mighty leader, <@139836912335716352>, blesses ${string}!`,
					},
				});
			} else if (mentions.first()) {
				msg.channel.send({
					embed: {
						color: 0x3669FA,
						description: `The mightly leader, <@139836912335716352>, blesses ${mentions.first().toString()}!`,
					},
				});
			} else {
				msg.channel.send({
					embed: {
						color: 0x3669FA,
						description: `Your mightly leader, <@139836912335716352>, blesses you!`
					}
				});
			}
		}
	},
	stroke: {
		aliases: ["strokes", "stroken"],
		run: async (msg, suffix) => {
			let mentions = msg.mentions.users;
			if (mentions.size > 1) {
				let string = mentions.array().join(", ");
				string = string.trim().replace(/,\s([^,]+)$/, " and $1");
				msg.channel.send({
					embed: {
						color: 0x3669FA,
						description: `Holy mother of porn!\n*${msg.author.toString()} walks up behind ${string}, gently pulls their pants down, reaches around and caresses them lovingly..*\nIt's a motherfucking gangbang I'll tell you that much!`
					}
				});
			} else if (mentions.first()) {
				msg.channel.send({
					embed: {
						color: 0x3669FA,
						description: `*${msg.author.toString()} walks up behind ${mentions.first().toString()}, gently pulls they pants down, reaches around and caresses them lovingly*`
					}
				});
			} else {
				msg.channel.send({
					embed: {
						color: 0xFF0000,
						description: `You don't think you can stroke yourself, do you..? ${config.emojis.facepalm}`,
					},
				});
			}
		}
	},
		// Hail, pray, dan
};

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
	if (msg.content.startsWith(config.prefix)) {
		let cmd = msg.content.substring(config.prefix.length).split(" ")[0].trim().toLowerCase();
		let suffix = msg.content.substring(cmd.length + 2).trim();
		for (const command in commands) {
			if (command[command].aliases.length > 1) {
				if (commands[command].aliases.includes(cmd)) {
					console.log(`${msg.author.tag} ran ${cmd}`);
					return await commands[command].run(msg, suffix);
				}
			}
		}
		if (commands[cmd]) {
			console.log(`${msg.author.tag} ran ${cmd}`);
			await commands[cmd].run(msg, suffix);
		}
	}
});
