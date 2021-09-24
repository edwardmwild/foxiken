const Discord = require('discord.js')
var botprefix = ('f/')
module.exports = {
    name: "kick",
    description: "kick command",
    async run (bot, message, args) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You do not have permission to use this command.")
        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "No reason given";
        const kickembed = new Discord.MessageEmbed()
        .setTitle(`You were kicked from **${message.guild.name}**`)
        .setDescription(`Reason: ${reason}`)
        .setColor(0xdd9bb4)
        .setTimestamp()
        .setFooter(bot.user.tag, bot.user.displayAvatarURL())
        if (!args[0]) return message.channel.send("Specify a user to kick.");
        if(!mentionMember) return message.channel.send("Invalid user.");
        if(!mentionMember.kickable) return message.channel.send("I was unable to kick this user.");
        try {
            await mentionMember.send(kickembed);
        } catch (err) {
        }
        try {
            await mentionMember.kick(reason);
            then(() => message.channel.send("Successfully kicked " + mentionMember.user.tag));
            console.log('Command run: '+botprefix+'kick by user '+message.author);
        } catch (err) {
            return message.channel.send("Successfully kicked " + mentionMember.user.tag);
        }
        console.log('Command run: '+botprefix+'kick by user '+message.author);
    }
}