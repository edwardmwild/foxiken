const Discord = require('discord.js');
var botprefix = ('f/')
module.exports = {
    name: "simjoin",
    description: "simulates a join!",

    async run (bot, message, args) {
        if(message.author.id != "530418630102482945") {
            message.channel.send('You do not have permission to run this command.')
            console.log(message.author+" Tried to run the simjoin developer command, but failed as they weren't a developer.")
            return;
        }
        bot.emit('guildMemberAdd', message.member);
        console.log('Developer command run: '+botprefix+'simjoin by user '+message.author)
    },
}