const Discord = require('discord.js')
var botprefix = ('f/')
module.exports = {
    name: "join",
    description: "command name here",
    async run (bot, message, args) {
        message.channel.send('Join the **Foxiken Community Discord server** here: https://discord.gg/b7eGwKupp3');
		console.log('Command run: '+botprefix+'join by user '+message.author);
    }
}