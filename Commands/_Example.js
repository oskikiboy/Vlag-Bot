const Command = require("./Command.js");

/**
 * Example command, explaining what everything does!
 */
module.exports = class _ExampleCommand extends Command {
	/**
	 * This is optional, but if you want to define a variable per command,
	 * you can use this. Useful for things like role IDs
	 * To access the bot variable, use `this.bot`
	 */
	constructor(...args) {
		super(...args);
		this.exampleVariable = "Hello!";
	}

	/**
	 * Using this, the bot will auto check if some conditions match.
	 * For instance, you can check if the msg member has a specific role!
	 * It MUST return a boolean (true / false)
	 * By default, it returns true
	 */
	requirements({ msg, suffix }) {
		return true;
	}

	/**
	 * This function will get called whenever the requirement fails. (AKA it returns false)
	 * Use this for instance to return an error message
	 */
	requirementsFail({ msg, suffix }) {
		msg.reply(`No!`);
	}

	/**
	 * The main function of the command
	 * If the requirements pass, this function will be called
	 * Do all your command magic here!
	 */
	async run({ msg, suffix }) {
		// Do things here!
	}

	/**
	 * Simple function that gets called if the user isn't a maintainer
	 * Its optional 
	 */
	noMaintainer({ msg, suffix }) {
		// This will run if the user tries to run a maintainer-only command but isn't a maintainer
	}
};

