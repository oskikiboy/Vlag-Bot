exports.run = async (bot, msg, suffix) => {
	if (suffix) {
		let toSend = suffix.replace(/a/g, "ａ")
												.replace(/b/g, "ｂ")
												.replace(/c/g, "ｃ")
												.replace(/d/g, "ｄ")
												.replace(/e/g, "ｅ")
												.replace(/f/g, "ｆ")
												.replace(/g/g, "ｇ")
												.replace(/h/g, "ｈ")
												.replace(/i/g, "ｉ")
												.replace(/j/g, "ｊ")
												.replace(/k/g, "ｋ")
												.replace(/l/g, "ｌ")
												.replace(/m/g, "ｍ")
												.replace(/n/g, "ｎ")
												.replace(/o/g, "ｏ")
												.replace(/p/g, "ｐ")
												.replace(/q/g, "ｑ")
												.replace(/r/g, "ｒ")
												.replace(/s/g, "ｓ")
												.replace(/t/g, "ｔ")
												.replace(/u/g, "ｕ")
												.replace(/v/g, "ｖ")
												.replace(/w/g, "ｗ")
												.replace(/x/g, "ｘ")
												.replace(/y/g, "ｙ")
												.replace(/z/g, "ｚ")
												.replace(/A/g, "Ａ")
												.replace(/B/g, "Ｂ")
												.replace(/C/g, "Ｃ")
												.replace(/D/g, "Ｄ")
												.replace(/E/g, "Ｅ")
												.replace(/F/g, "Ｆ")
												.replace(/G/g, "Ｇ")
												.replace(/H/g, "Ｈ")
												.replace(/I/g, "Ｉ")
												.replace(/J/g, "Ｊ")
												.replace(/K/g, "Ｋ")
												.replace(/L/g, "Ｌ")
												.replace(/M/g, "Ｍ")
												.replace(/N/g, "Ｎ")
												.replace(/O/g, "Ｏ")
												.replace(/P/g, "Ｐ")
												.replace(/Q/g, "Ｑ")
												.replace(/R/g, "Ｒ")
												.replace(/S/g, "Ｓ")
												.replace(/T/g, "Ｔ")
												.replace(/U/g, "Ｕ")
												.replace(/V/g, "Ｖ")
												.replace(/W/g, "Ｗ")
												.replace(/X/g, "Ｘ")
												.replace(/Y/g, "Ｙ")
												.replace(/Z/g, "Ｚ");
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: toSend,
			},
		});
	} else {
		msg.channel.send({
			embed: {
				color: 0x3669FA,
				description: `Ａ　Ｓ　Ｔ　Ｈ　Ｅ　Ｔ　Ｉ　Ｃ　Ｓ`,
			},
		});
	}
};
