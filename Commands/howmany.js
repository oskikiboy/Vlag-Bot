const reload = require("require-reload")(require);
const Command = require("./Command.js");
const { HowMany: HowManySubcommands } = reload("./Subcommand/");
const {
	usage: Usage,
	commands: Commands,
} = HowManySubcommands;

module.exports = class HowMany extends Command {
	requirements({ msg, suffix }) {
		if (suffix) {
			suffix = suffix.trim().toLowerCase().split(" ")[0];
			if (this.commandData.subcommands.indexOf(suffix) > -1) return true;
		}
		return false;
	}

	requirementsFail({ msg, suffix }) {
		let string = "";
		for (const subcmd of this.commandData.subcommands) {
			if (this.commandData.subcommands.indexOf(subcmd) + 1 === this.commandData.subcommands.length) {
				string += `or \`${subcmd}\``;
			} else {
				string += `\`${subcmd}\` `;
			}
		}
		msg.channel.send({
			embed: {
				color: 0xFF0000,
				description: `That's not a valid subcommand!\nHere are the available ones: ${string.trim().toLowerCase()}`,
			},
		});
	}

	async run({ msg, suffix }) {
		let cmd = suffix.trim().toLowerCase().split(" ")[0];
		suffix = suffix.split(" ").splice(1).join(" ");
		switch (cmd) {
			case "usages":
			case "usage": return new Usage(this, { msg: msg, suffix });
			case "commands":
			case "cmds": return new Commands(this, { msg: msg, suffix });
		}
	}
};

