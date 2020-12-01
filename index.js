const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });
const express = require('express')
const app = express()
  
app.get('/', function (req, res) {
  res.send('Jsem na světě')
})
 
app.listen(3000)

client.once('ready', () => {

	client.user.setPresence({ activity: { name: '_help | Díky za používání' }, status: 'dnd' });
	console.log(`Jsem přihlášen za ${client.user.tag}`);
	console.log(3+5)
});
client.on('message', message => {
	if (message.content === '_ping') {
		message.channel.send('Pong.');
	}
		if (message.content === "cc") {
		message.channel.send("Zdar brácho")
	}
	if (message.content === "Čau") {
		message.channel.send("Zdar brácho")
	}
		if (message.content === "čau") {
		message.channel.send("Zdar brácho")
	}
		if (message.content === "Cs") {
		message.channel.send("Zdar brácho")
	}
		if (message.content === "cs") {
		message.channel.send("Zdar brácho")
	}
		if (message.content === "Cc") {
		message.channel.send("Zdar brácho")
	}
	if (message.content == 'Dobrý den') {
		message.channel.send("Dobrý den pane/paní")
	}
		if (message.content == 'dobrý den') {
		message.channel.send("Dobrý den pane/paní")
	}
		if (message.content == 'dobry den') {
		message.channel.send("Dobrý den pane/paní")
	}
	if (message.content == '_help') {
		const embed = new Discord.MessageEmbed()
		.setTitle("Direl | Help")
		.setAuthor('Direl', 'https://upload.hicoria.com/files/b9k3bZED.gif', 'https://wear.kadleckadlec00.repl.co')
		.setColor("#b3240e")
		.setDescription("Můj prefix je `_`. Developer je `Wear#6501`")
			.addFields(
		{ name: '↓ Příkazy ↓', value: '`_help` | `_ping` | `_change` | `_invite` | `_youtube`' },
		)
		.setFooter("Děkuji za používání")
		.setTimestamp()
		message.channel.send(embed);
	}
	if (message.content == '_change') {
		let embed = new Discord.MessageEmbed()
		.setTitle("Mé změny")
		.setDescription("Takže moje novinky jsou profilovka a nové příkazy")
		.setColor("#b3240e")
		.setFooter("Děkuji za používání")
		message.channel.send(embed);
		message.channel.send("Děkuji že mě používváš")
	}
	if (message.content == "_invite") {
		message.react("✅")
		const embed = new Discord.MessageEmbed()
		.setDescription("Zde je můj invite [zde]( https://discord.com/oauth2/authorize?client_id=783029839133147167&scope=bot&permissions=8)")
		.setColor("#b3240e")
		message.author.send(embed);
		const done = new Discord.MessageEmbed()
		.setDescription("Koukni do soukromých zpráv")
		.setColor("#b3240e")
		message.channel.send(done);
	}
	if (message.content === "_youtube") {
		message.react("✅")
		const ytbdm = new Discord.MessageEmbed()
		.setDescription("Zde je mého developera youtube [zde](https://www.youtube.com/channel/UC3c7qp4WGGSl0ABkzCuQr_Q?view_as=subscriber)")
		.setColor("#b3240e")
		message.author.send(ytbdm);
			const done = new Discord.MessageEmbed()
		.setDescription("Koukni do soukromých zpráv")
		.setColor("#b3240e")
		message.channel.send(done);
	}
});

client.login(process.env.TOKEN);
