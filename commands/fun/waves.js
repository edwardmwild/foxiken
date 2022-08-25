const Discord = require('discord.js')
const { feedbackId } = ('870643222551068672')
var botprefix = ('f/')
module.exports = {
    name: "waves",
    description: "waves",
    async run (bot, message, args) {
        message.channel.send("Here is a link to some **Nice Ocean Waves:** https://bit.ly/3DSYeIt")
        console.log("Command run: "+botprefix+"waves by user "+message.author)
    }
}