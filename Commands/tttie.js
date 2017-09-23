const Command = require("./Command.js");

/**
 * TTtie is not the god
 */
module.exports = class TTtie extends Command {

	requirements({ msg, suffix }) {
		return true;
	}

  requirementsFail({ msg, suffix }) {
		msg.reply(`ping b1nzy today`);
	}

	async run({ msg, suffix }) {
		msg.channel.send({
      embed: {
        color: 0x008800,
        description: `TTtie, also known as the almighty b1nzy pinger and the god. He is a programmer that likes to put this ***beautiful*** command here. All have to hail him and Vlag the God.${suffix.toLowerCase() == "hail" ? `\nYou have hailed TTtie! (and Vlag too)`:""}`
      }
    })
	}
};

