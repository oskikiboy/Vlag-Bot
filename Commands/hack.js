const Command = require("./Command.js");

module.exports = class Hack1337 extends Command {
	async run({ msg, suffix }) {
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `1337 haxing teem sumooned`,
				image: {
					url: `https://media1.giphy.com/media/eCqFYAVjjDksg/giphy.gif`,
				},
			},
		});
	}
};

