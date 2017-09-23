module.exports = {
	/**
	 * If the bot should also reply to mentions.
	 */
	allowMentionAsPrefix: true,
	/**
	 * Discord Token
	 */
	token: ``,
	/**
	 * An array of maintainer IDs
	 */
	maintainers: [
		"139836912335716352",
	],
	/**
	 * The main bot prefix
	 */
	prefix: "/",
	/**
	 * An array of playing quotes
	 * Will switch every 5 minutes
	 */
	playingStatuses: [
		"with GAwesomeBot",
		"approved by Vlag",
		"#Vlagland",
		"all hail our mighty leader, Vlag!",
		"error 404: quote not found",
		"now better than ever!",
	],
	/**
	 * Time in milliseconds to change the playing status
	 */
	changePlayingStatusEvery: 300000,
	/**
	 * An object of custom emojis with the full mention for them (`<:name:id>`)
	 */
	emojis: {
		hadenFacepalm: "<:haden:260203490415083520>",
	},
	/**
	 * Utility stuff for logging things and such.
	 */
	logging: {
		/**
		 * The guild ID
		 */
		guild: ``,
		/**
		 * The channel in the guild
		 */
		channel: ``,
	},
	/**
	 * If the bot should delete the command message
	 */
	deleteMessage: false,
};
