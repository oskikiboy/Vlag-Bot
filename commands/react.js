exports.run = async (bot, msg, suffix) => {
	if (msg.member.roles.has("259858538308960257") || msg.member.roles.has("259847832121507843")) {
		if (!new RegExp(/\d/).test(suffix)) return msg.reply(`thats not a valid message ID.`).then(m => m.delete(15 * 1000));
		try {
			let fetched = await msg.channel.fetchMessage(suffix.trim());
			await fetched.react(`👍`);
			await fetched.react(`👎`);
			await msg.delete();
		} catch (err) {
			msg.reply(`an error occured!\n${err.message}`);
		}
	} else {
		return msg.reply(`you don't have permission to run this command`).then(m => m.delete(15 * 1000));
	}
};
