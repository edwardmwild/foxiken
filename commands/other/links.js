const Discord = require('discord.js')
var botprefix = ('f/')
module.exports = {
    name: "links",
    description: "command name here",
    async run (bot, message, args) {
        message.channel.send("Click here to see some useful links: https://www.linktr.ee/foxiken");
		console.log('Command run: '+botprefix+'links by user '+message.author);
    }
}