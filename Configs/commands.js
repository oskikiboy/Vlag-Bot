/**
 * Defining commands here
 */
module.exports = {
	_base: {
		maintainer: true,
		aliases: ["basic", "baase"],
		usage: `<user>`,
		description: `Eggs`,
		subcommands: ["array", "of", "subcommands"],
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
	tom: {
		aliases: ["dnomaid", "badfish"],
		maintainer: false,
		usage: ``,
		description: `Tells dnomaid he's a bad fish.. \\🐟`,
	},
	stroke: {
		maintainer: false,
		usage: `<...user>`,
		description: `Stroke someone. Why not?!`,
		aliases: ["strake", "strokes"],
	},
	gay: {
		aliases: ["gey", "guy"],
		maintainer: false,
		usage: `[<...user>]`,
		description: `Is someone gay? (It doesn't give a rating)`,
	},
	bantergaming: {
		aliases: ["banter", "eggs", "egg"],
		maintainer: false,
		usage: ``,
		description: `Banter lieks eggz`,
	},
	bless: {
		aliases: ["blessup", "blesses", "bloss"],
		maintainer: false,
		usage: `[<...user>]`,
		description: `Vlag the God blesses you (or others too!)`,
	},
	fixit: {
		aliases: ["fix", "fix-it"],
		maintainer: false,
		usage: ``,
		description: `Fix what now?`,
	},
	gabvsauttaja: {
		aliases: ["auttajaisbetter", "gabsucks", "switch_to_auttaja", "switch_to_gawesomebot"],
		maintainer: false,
		usage: ``,
		description: `Uhm.. Do we really need a command to explain that both bots are good?!`,
	},
	gellatio: {
		aliases: ["gelato", "italianicecream"],
		maintainer: false,
		usage: ``,
		description: `Gellatio is a gay cup of ice cream.`,
	},
	gordon: {
		aliases: ["ramsey", "ramsay"],
		maintainer: false,
		usage: ``,
		description: `He's comming after you.. 🤔`,
	},
	hack: {
		aliases: ["h4x0r", "1337"],
		maintainer: false,
		usage: ``,
		description: `Hack the mainframe! 1337 style!`,
	},
	howmany: {
		aliases: ["howmuch", "what"],
		maintainer: false,
		usage: `<commands> or <usage>`,
		description: `Shows you the usage amount of the bot or the amount of commands present in the bot!`,
		subcommands: ["commands", "cmds", "usage", "usages"],
	},
};
