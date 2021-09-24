const Discord = require('discord.js');
var botprefix = ('f/')
module.exports = {
    name: "stop",
    description: "stops playing a song!",
    async run (bot, message, args) {
        if(!message.member.voice.channel) return message.reply('Join a voice channel.');
        await bot.distube.stop(message)
        await message.channel.send("**Stopped Playing.**")
    }
}