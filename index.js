const Discord = require('discord.js');
const bot = new Discord.Client();
const { token } = require('./config.json');
const { readdirSync, read } = require('fs');
const ms = require('ms');
const { join } = require('path');
const config = require('./config.json');
bot.config = config;
bot.commands = new Discord.Collection();
const commandFolders = readdirSync('./commands');
const Timeout = new Discord.Collection();
const prefix = config.prefix;
for (const folder of commandFolders) {
    const commandFiles = readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        bot.commands.set(command.name, command);
    }
}
bot.on("error", console.error);
bot.on('ready', () => {
    console.log('Client is ready!');
    bot.user.setActivity(prefix+'help for help', { type: "WATCHING" }).catch(console.error)
})
bot.on("message", async (message) => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') {
        message.channel.send("My commands don't work in DMs, Try inviting me to your server with **this link:** https://discord.com/oauth2/authorize?client_id=799198242683879454&scope=bot&permissions=32775366")
        return;
    }
    if(message.content === '<@!799198242683879454>') {
        message.channel.send('https://cdn.discordapp.com/attachments/868517176586436611/868526673417613353/9k.png')
        message.channel.send('Oh, it was you, **<@'+message.author+'>**')
    }
    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if(!command) return;
        if (command) {
            if(command.cooldown) {
                if(Timeout.has(`${command.name}${message.author.id}`)) return message.channel.send(`Please Wait \`${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {long: true})}\` Before using this command again!`);
                command.run(bot, message, args)
                Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.cooldown)
                setTimeout(() => {
                    Timeout.delete(`${command.name}${message.author.id}`)
                }, command.cooldown)
            } else command.run(bot, message, args);
        }
    }
})
const distube = require('distube');
bot.distube = new distube(bot, { searchSongs: false, emitNewSongOnly: true })
bot.distube
    .on('playSong', (message, queue, song) => message.channel.send(
        `Now playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`,
    ))
    .on('addSong', (message, queue, song) => message.channel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue\nRequested by ${song.user}`,
    ))
    .on('error', (message, e) => {
		//console.error(e)
		message.channel.send(`An error occurred: ${e}`)
	})
bot.login(token);