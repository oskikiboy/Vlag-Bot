const Command = require("./Command.js");

module.exports = class BanterGaming extends Command {
	async run({ msg, suffix }) {
		if (!this.client.users.get("201043573162901504")) await this.client.users.fetch("201043573162901504");
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `i liek eggs`,
				thumbnail: {
					url: this.client.users.get("201043573162901504").displayAvatarURL({ size: 128 }),
				},
			},
		});
	}
};
