const Command = require("./Command.js");

module.exports = class Negative extends Command {
	async run({ msg, suffix }) {
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `Oh fuck, <@247206705358831627> has been exposed *shocker*`,
				image: {
					url: `http://weknowmemes.com/wp-content/uploads/2013/12/oh-for-fucks-sake-gif-1.gif`,
				},
			},
		});
	}
};

