/**
 * Defining commands here
 */
module.exports = {
	_base: {
		maintainer: true,
		aliases: ["basic", "baase"],
		usage: `<user>`,
		description: `Eggs`,
	},
	ping: {
		maintainer: false,
		usage: ``,
		description: `Pings the bot. What else?!`,
		aliases: ["pang"],
	},
	eval: {
		aliases: ["ev"],
		maintainer: true,
		usage: `<code>`,
		description: `Evaluates some code in the context of the bot.`,
	},
	kingdgrizzle: {
		aliases: ["kingd", "kdg"],
		maintainer: false,
		usage: ``,
		description: `KingDGrizzle but cringy.`,
	},
	reload: {
		maintainer: true,
		usage: `"all" or <...command>`,
		description: `Reloads a command or all the configs and the commands`,
	},
	tttie: {
		maintainer: false,
		aliases: ["almighty-b1nzy-pinger"],
		usage: `[hail]`,
		description: `TTtie is not the god`,
	},
};
