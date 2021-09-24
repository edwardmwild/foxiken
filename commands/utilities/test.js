const Discord = require('discord.js')
var botprefix = ('f/')
module.exports = {
    name: "test",
    description: "command name here",
    async run (bot, message, args) {
        message.channel.send('I am online and **running fine!** :)');
		console.log('Command run: '+botprefix+'test by user '+message.author);
    }
}