const Command = require("./Command.js");

module.exports = class FixIt extends Command {
	async run({ msg, suffix }) {
		msg.channel.send({
			embed: {
				color: 0x00FF00,
				description: `What are you on about? This bot works better than any bot ever will!`,
				footer: {
					text: `On real notes, if the bot actually broke, DM Vlag about it!`,
				},
			},
		});
	}
};

