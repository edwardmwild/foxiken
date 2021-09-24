const Discord = require('discord.js')
var botprefix = ('f/')
module.exports = {
    name: "dev",
    description: "command name here",
    async run (bot, message, args) {
        message.channel.send('To apply to become a developer, join the discord server (using  `'+botprefix+'join`), then DM Jexanti.');
		console.log('Command run: '+botprefix+'dev by user '+message.author);
    }
}