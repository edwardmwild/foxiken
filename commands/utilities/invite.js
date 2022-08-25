const Discord = require('discord.js')
var botprefix = ('f/')
module.exports = {
    name: "invite",
    description: "command name here",
    async run (bot, message, args) {
        message.channel.send('Invite me to your server with **this link:** https://bit.ly/foxiken-invite');
		console.log('Command run: '+botprefix+'invite by user '+message.author)
    }
}