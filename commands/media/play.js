const Discord = require('discord.js');
var botprefix = ('f/')
module.exports = {
    name: "play",
    aliases: ['p'],
    description: "play a song!",
    async run (bot, message, args) {
        if(!message.member.voice.channel) return message.reply('Join a voice channel.');
        const music = args.join(" ");
        if(!music) return message.reply("Provide a song.");
        await bot.distube.play(message, music)
        console.log('Command run: '+botprefix+'play by user '+message.author)
    }
}