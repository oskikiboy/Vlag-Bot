const reload = require("require-reload")(require);

module.exports = {
	/**
	 * Define objects for each command subcommand(s)
	 * Require the file!
	 */
	HowMany: {
		usage: reload("./HowMany/usage.js"),
		commands: reload("./HowMany/commands.js"),
	},
};
