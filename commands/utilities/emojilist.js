const Discord = require('discord.js')
const { feedbackId } = ('870643222551068672')
var botprefix = ('f/')
module.exports = {
    name: "emojilist",
    description: "feedback command (embed style)",
    async run (bot, message, args) {
        message.channel.send("If you want me to emojify something, use the "+botprefix+"say command, but type every letter as an emoji with the format `:Fox{letter you want}:` e.g. If you wanted me to type the letter `K`, you would type `:FoxK:`")
    }
}