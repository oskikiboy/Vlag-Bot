const Command = require("./Command.js");

module.exports = class Lazor extends Command {
	async run({ msg, suffix }) {
		msg.channel.send({
			embed: {
				color: 0x002E59,
				description: `V-BOT IS MY COPYRIGHT!!!`,
				image: {
					url: `https://lazer.cf/assets/lazerbot/icon.png`,
				},
				footer: {
					text: `Except it isn't your copyright. -- Vlad`,
				},
			},
		});		
	}
};

