const Discord = require('discord.js')
var botprefix = ('f/')
module.exports = {
    name: "ikea",
    description: "command name here",
    async run (bot, message, args) {
        const ikearesponses = ["Hej!","Who doesn't like **swedish Furniture?**","anyone who insults those beautiful alex drawers **will die**","***IKEA IS LIFE!***"]
		var ikearesponseIndex = Math.round(Math.random() * ikearesponses.length)
		var ikearesponse = ikearesponses[ikearesponseIndex]
		console.log('Command run: '+botprefix+'ikea with response '+(ikearesponseIndex)+' by user '+message.author)
		message.channel.send(ikearesponse)
    }
}