const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express')
const app = express()
  
app.get('/', function (req, res) {
  res.send('Jsem na světě')
})
 
app.listen(3000)

client.once('ready', () => {
	client.user.setPresence({ activity: { name: '_help | Díky za používání' }, status: 'dnd' });
	console.log(`Jsem přihlášen za ${client.user.tag}`);
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
		.setColor("#b3240e")
		.setDescription("Tady najdeš mé příkazy\n\n `_ping` | `_help`\n\nMám více příkazů ale ty se zprovozní jen když napíšeš nějaký pozdrav např.: cc")
		.setFooter("Děkuji za používání")
		message.channel.send(embed);
	}
	if (message.content == '_change') {
		let embed = new Discord.MessageEmbed()
		.setTitle("Mé změny")
		.setDescription("Takže moje novinky jsou profilovka a přidávání pozdravů")
		.setColor("#b3240e")
		.setFooter("Děkuji za používání")
		message.channel.send(embed);
		message.channel.send("Děkuji že mě používváš")
	}
});

client.login(process.env.TOKEN);
