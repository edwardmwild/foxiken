const Discord = require('discord.js')
module.exports = {
    name: "ping",
    description: "ping command",
    async run (bot, message, args) {
        const ping = new Discord.MessageEmbed()
        .setTitle('Pong!')
        .setDescription(`🏓 \`${Date.now() - message.createdTimestamp} ms\``)
        .setColor(0xdd9bb4);
        message.channel.send(ping)
    }
}