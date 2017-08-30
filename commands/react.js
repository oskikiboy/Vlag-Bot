exports.run = async (bot, msg, suffix) => {
	if (!msg.member.roles.has("259858538308960257") || !msg.member.roles.has("259847832121507843")) return msg.reply(`you don't have permission to run this command`).then(m => m.delete(10));
	if (!new RegExp(/\d/).test(suffix)) return msg.reply(`thats not a valid message ID.`).then(m => m.delete(10));
	try {
		let fetched = msg.channel.fetchMessage(suffix.trim());
		await fetched.react(`👍`);
		await fetched.react(`👎`);
	} catch (err) {
		msg.reply(`an error occured!\n${err.message}`);
	}
};
