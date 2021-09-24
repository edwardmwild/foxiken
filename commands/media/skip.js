const Discord = require('discord.js');
var botprefix = ('f/')
module.exports = {
    name: "skip",
    description: "skips the current song in the queue",
    async run (bot, message, args) {
        if(!message.member.voice.channel) return message.reply('Join a voice channel.');
        await bot.distube.skip(message)
        await message.channel.send("Skipped current song.")
        console.log('Command run: '+botprefix+'skip by user '+message.author)
    }
}