const Discord = require('discord.js')
var botprefix = ('f/')
module.exports = {
    name: "website",
    description: "command name here",
    async run (bot, message, args) {
        message.channel.send('Here is a **direct link** to my website: https://sites.google.com/view/foxiken-website');
		console.log('Command run: '+botprefix+'website by user '+message.author);
    }
}