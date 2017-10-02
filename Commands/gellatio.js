const Command = require("./Command.js");

module.exports = class Gellatio extends Command {
	async run({ msg, suffix }) {
		let images = [
			"http://sweets.seriouseats.com/images/2015/04/20150424-larte-del-gelato-robyn-lee-redo.jpg",
			"https://static1.squarespace.com/static/56ba200227d4bdb5579a1157/t/56ba2683f850828a66da240e/1455115880668/dojo+gelato+ice+cream+scoops+home+page.jpeg",
			"http://www.gelatogo.net/wp-content/uploads/2014/11/big_gelato.png",
			"http://lartedelgelato.com/wp/wp-content/uploads/2016/01/lartedelgelato-3.jpg",
			"http://www.gelatogo.net/wp-content/uploads/2016/09/gelato-organico.jpg",
			"http://img.aws.livestrongcdn.com/ls-article-image-673/cpi.studiod.com/www_livestrong_com/photos.demandstudios.com/getty/article/103/35/483914165_XS.jpg",
		];
		msg.channel.send({
			embed: {
				color: 0x7289DA,
				description: `<@210273983898058752> is a gay cup of Italian Ice Cream! 👀`,
				image: {
					url: images[Math.floor(Math.random() * images.length)],
				},
			},
		});
	}
};

