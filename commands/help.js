const commands = require(`../commands.js`);
exports.run = async (bot, msg, suffix) => {
	const output = [];
	const template = (cmd, aliases, maintainer) => {
		const string = `**»** ${cmd}\nAliases: \`${aliases.join(", ")}\`\nMaintainer Only: ${maintainer}`;
		return string;
	};
	for (const command in commands) {
		output.push(template(command, commands[command].aliases, commands[command].maintainer));
	}
	msg.channel.send({
		embed: {
			color: 0x3669FA,
			description: output.join("\n"),
		},
	});
};
