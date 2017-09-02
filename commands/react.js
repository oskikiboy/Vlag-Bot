exports.run = async (bot, msg, suffix) => {
	const reactTo = async theMsg => {
		try {
			await theMsg.react(`352726359002447872`);
			await theMsg.react(`352726358650257410`);
		} catch (err) {
			msg.reply(`I can't react to that message!`).then(m => m.delete(15 * 1000));
		}
	};
	if (msg.member.roles.has("259858538308960257") || msg.member.roles.has("259847832121507843")) {
		try {
			await msg.delete();
		} catch (e) {
			// Whatever
		}
		if (suffix && new RegExp(/\d/).test(suffix)) {
			await reactTo(await msg.channel.fetchMessage(suffix.trim()));
		} else if (suffix && !new RegExp(/\d/).test(suffix)) {
			msg.reply(`invalid message ID!`).then(m => m.delete(15 * 1000));
		} else {
			const coll = await msg.channel.fetchMessages({
				limit: 1,
				before: msg.id,
			});
			const theMsg = coll.first();
			if (theMsg) await reactTo(theMsg);
		}
	}
};
