const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();
const { readdirSync } = require('fs');
const { join } = require('path');
const { notDeepEqual } = require('assert');
var prefix = (config.prefix)
bot.commands = new Discord.Collection();
const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    bot.commands.set(command.name, command);
}
bot.on("error", console.error);
bot.on('ready', () => {
    console.log('The client is ready!')
    bot.user.setActivity(prefix+'help for help', { type: "WATCHING" }).catch(console.error)
})
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') {
        message.channel.send("I don't work in DMs, Try adding me to your server with this link: https://discord.com/oauth2/authorize?client_id=799198242683879454&scope=bot&permissions=32775366")
    }
    if (message.content === '<@!799198242683879454>') {
		message.channel.send('https://cdn.discordapp.com/attachments/868517176586436611/868526673417613353/9k.png')
		message.channel.send("Oh, it was you, <@"+message.author+">.")
	}
    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if(!bot.commands.has(command)) return; 
        try {
            bot.commands.get(command).run(bot, message, args);
        } catch (error){
            console.error(error);
        }
    }
})
const distube = require('distube');
bot.distube = new distube(bot, { searchSongs: false, emitNewSongOnly: true })
bot.distube
    .on('playSong', (message, queue, song) => message.channel.send(
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`,
    ))
    .on('addSong', (message, queue, song) => message.channel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`,
    ))
    .on('error', (message, e) => {
		//console.error(e)
		message.channel.send(`An error encountered: ${e}`)
	})
bot.login(config.token);
