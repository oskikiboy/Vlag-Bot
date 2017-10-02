const Command = require("./Command.js");

module.exports = class GABVsAuttaja extends Command {
	async run({ msg, suffix }) {
		msg.channel.send({
			embed: {
				color: 0x00FF00,
				description: `Both [GAwesomeBot](https://gawesomebot.com) and [Auttaja](https://auttaja.us) are very good bots.\nTheres no need to say \`Auttaja is better\` or \`GAwesomeBot is better\`, both bots do what they need to do, and do it *decently* well.`,
			},
		});
	}
};

