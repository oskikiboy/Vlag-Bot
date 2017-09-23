const Command = require("./Command.js");
 
module.exports = class KingDGrizzle extends Command {
	async run({ msg, suffix }) {
		msg.channel.send({
			embed: {
				color: 0x00FF00,
				thumbnail: {
					url: `https://s20.postimg.org/rj4sfbvwd/King_DGrizzle_-_512.png`,
				},
				description: `My name is KingDGrizzle, and I've got a starter YouTube channel!\nI'm trying my best to do amazing content for you, but if it's not amazing, then I'm sorry, I'm trying my best!!\nI've got social media too! Check it out!`,
			},
		});
	}
};

