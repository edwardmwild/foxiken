const Discord = require('discord.js')
var botprefix = ('f/')
module.exports = {
    name: "version",
    description: "command name here",
    async run (bot, message, args) {
        message.channel.send('I am currently running **version 11.0.0** - Run '+botprefix+'changelog to see what is new!');
		console.log('Command run: '+botprefix+'version by user '+message.author);
    }
}