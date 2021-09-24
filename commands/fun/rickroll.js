const Discord = require('discord.js')
var botprefix = ('f/')
module.exports = {
    name: "rickroll",
    description: "command name here",
    async run (bot, message, args) {
        if(message.content === botprefix+'rickroll tts') {
            message.channel.send("Never gonna give you up. Never gonna let you down. Never gonna run around and desert you. Never gonna make you cry. Never gonna say, goodbye. Never gonna tell, a lie, and hurt you.", {
                tts: true
            })
            message.channel.send('**You have been rick rolled by <@'+message.author+'>**', {
                tts: true
            })
            message.channel.send('https://media.discordapp.net/attachments/801006240905560084/842324818379407390/image0.jpg');
            console.log('Command run: '+botprefix+'rickroll (tts:true) by user '+message.author);
        }
        else {
            message.channel.send("Never gonna give you up. Never gonna let you down. Never gonna run around and desert you. Never gonna make you cry. Never gonna say, goodbye. Never gonna tell, a lie, and hurt you.")
    		message.channel.send('**You have been rick rolled by <@'+message.author+'>**')
	    	message.channel.send('https://media.discordapp.net/attachments/801006240905560084/842324818379407390/image0.jpg');
		    console.log('Command run: '+botprefix+'rickroll (tts:false) by user '+message.author);
            message.channel.send('*Did you know you can type* `'+botprefix+'rickroll tts` *to make me read Rick Astley in text-to-speech?*')
        }
    }
}