const Discord = require('discord.js')
var botprefix = ('f/')
module.exports = {
    name: "suggest",
    description: "command name here",
    async run (bot, message, args) {
        message.channel.send('Please visit **this site** to suggest something: https://sites.google.com/view/foxiken-website/suggest');
		console.log('Command run: '+botprefix+'suggest by user '+message.author);
    }
}