const Discord = require('discord.js')
var botprefix = ('f/')
module.exports = {
    name: "hello",
    description: "hello command",
    async run (bot, message, args) {
        const responses = ["Hi!","Hello!","Bonjour!","Hey!","Guten Tag!","Hallo!","Ola!","Hej!"]
		var responseIndex = Math.round(Math.random() * responses.length-1)
		var response = responses[responseIndex]
		console.log('Command run: '+botprefix+'hello with response '+(responseIndex+1)+' by user '+message.author)
		message.channel.send(response)
    }
}