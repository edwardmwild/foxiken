const Discord = require('discord.js')
var botprefix = ('f/')
module.exports = {
    name: "ban",
    description: "ban command",
    async run (bot, message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission to use this command.")
        console.log('Command run: '+botprefix+'kick by user '+message.author);
        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "No reason given";
        const embed = new Discord.MessageEmbed()
        .setTitle(`You were banned from **${message.guild.name}**`)
        .setDescription(`Reason: ${reason}`)
        .setColor(0xdd9bb4)
        .setTimestamp()
        .setFooter(bot.user.tag, bot.user.displayAvatarURL())
        if (!args[0]) return message.channel.send("Specify a user to ban");
        if(!mentionMember) return message.channel.send("Invalid user.");
        if(!mentionMember.bannable) return message.channel.send("I was unable to ban this user.");
        await mentionMember.send(embed);
        await mentionMember.ban({
            reason: reason
        }).then(() => message.channel.send("Successfully banned " + mentionMember.user.tag));
        console.log('Command run: '+botprefix+'ban by user '+message.author);
    }
}