const Discord = require('discord.js')
var botprefix = ('f/')
module.exports = {
    name: "rps",
    description: "rock paper scissors command",
    async run (bot, message, args) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Rock Paper Scissors")
        .setDescription("React to play!")
        .setColor(0xdd9bb4)
        .setTimestamp()
        let msg = await message.channel.send(embed)
        await msg.react("🗻")
        await msg.react("✂")
        await msg.react("📰")
        const filter = (reaction, user) => {
            return ['🗻', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
        }
        const choices = ['🗻', '✂', '📰']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max: 1, time: 60000, error: ["time"]}).then(
            async(collected) => {
                const reaction = collected.first()
                let result = new Discord.MessageEmbed()
                .setTitle("Result")
                .setColor(0xdd9bb4)
                .addField("Your Choice", `${reaction.emoji.name}`)
                .addField("Foxiken's choice", `${me}`)
                await msg.edit(result)
                if((me === "🗻" && reaction.emoji.name === "✂") ||
                (me === "✂" && reaction.emoji.name === "📰") ||
                (me === "📰" && reaction.emoji.name === "🗻")) {
                    message.reply("You Lost!");
                    console.log(message.author+' lost a game of rock paper scissors.')
                } else if (me === reaction.emoji.name) {
                    return message.reply("Its a draw!");
                    console.log(message.author+' drew in a game of rock paper scissors.')
                } else {
                    return message.reply("You Won!");
                    console.log(message.author+' won in a game of rock paper scissors.')
                }
            })
            .catch(collected => {
                message.reply("Game abandoned, you didn't react in time!");
                console.log('Game abandoned: '+botprefix+'rps by user '+message.author)
            }) 
    }
}