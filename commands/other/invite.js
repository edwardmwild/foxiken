const Discord = require('discord.js')
var botprefix = ('f/')
module.exports = {
    name: "invite",
    description: "command name here",
    async run (bot, message, args) {
        message.channel.send('Invite me to your server with **this link:** https://discord.com/oauth2/authorize?client_id=799198242683879454&scope=bot&permissions=32775366');
		console.log('Command run: '+botprefix+'invite by user '+message.author)
    }
}