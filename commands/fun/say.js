const Discord = require('discord.js')
const { feedbackId } = ('870643222551068672')
var botprefix = ('f/')
module.exports = {
    name: "say",
    description: "feedback command (embed style)",
    async run (bot, message, args) {
        message.channel.send(args)
        console.log('Command run: '+botprefix+'say with response '+args+' by '+message.author)
    }
}