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
	vlag: {
		maintainer: false,
		aliases: ["vlad"],
		usage: ``,
		description: `All hail Vlag!`,
	},
	vaporwave: {
		aliases: ["vapor", "wave"],
		maintainer: false,
		usage: `[text]`,
		description: `Make some sick ass Ａ　Ｅ　Ｓ　Ｔ　Ｈ　Ｅ　Ｔ　Ｉ　Ｃ　Ｓ text.`,
	},
};
