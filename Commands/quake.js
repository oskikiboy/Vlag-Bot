const Command = require("./Command.js");

module.exports = class Quake extends Command {
	async run({ msg, suffix }) {
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				image: {
					url: "https://cdn.discordapp.com/attachments/239055385049300992/352543222406578178/IMG_3639.JPG",
				},
				description: `The **Quake-Propaganda** is real with this one.`,
			},
		});
	}
};

