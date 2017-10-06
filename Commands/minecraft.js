const Command = require("./Command.js");

module.exports = class Minecraft extends Command {
	async run({ msg, suffix }) {
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `It's mining day bro with that water bucket flow. 500,000 diamonds man; never done before.\nPassing all the competition, man DanTDM is next.`,
				thumbnail: {
					url: `https://lazer.cf/assets/lazerbot/minecraft.png`,
				},
				footer: {
					text: `Command by Lazer :)`,
				},
			},
		});
	}
};

