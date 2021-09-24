const Discord = require('discord.js')
const config = ('./commands/config.json')
var botprefix = ('f/')
module.exports = {
    name: "help",
    description: "help command",
    async run (bot, message, args) {
        if(message.content === botprefix+'help fun') {
            const commandEmbed = {
                color: 0xdd9bb4,
                title: "Foxiken Help",
                description: "Get help!",
                fields: [
                    {
                        name: "Here are my fun commands:",
                        value: "**"+botprefix+"joke**\nGet one of 4 absolutely terrible jokes.\n\n**"+botprefix+"ikea**\nI mean who doesn't love IKEA?\n\n**@Foxiken**\nPing me to see my response.\n\n**"+botprefix+"rps**\nPlay rock paper scissors with me.\n\n**"+botprefix+"tictactoe**\nPlay tictactoe, also known as naughts and crosses.",
                    },
                ],
                timestamp: new Date(),
                footer: {
                    text: "The "+botprefix+"help fun command was used.",
                },
            }
            message.channel.send({embed : commandEmbed});
            console.log('Command run: '+botprefix+'help fun by user '+message.author);
            msgRespondedTo = true
        }
        if(message.content === botprefix+'help rick') {
            const commandEmbed = {
                color: 0xdd9bb4,
                title: "Foxiken Help",
                description: "Get help!",
                fields: [
                    {
                        name: "Here are my Rick Astley commands:",
                        value: "**"+botprefix+"rickroll**\nRickroll everyone.\n\n**"+botprefix+"rickroll tts**\nRickroll everyone, but everyone focused on the channel will have the chorus read in text to speech.",
                    },
                ],
                timestamp: new Date(),
                footer: {
                    text: "The "+botprefix+"help rick command was used.",
                },
            }
            message.channel.send({embed : commandEmbed});
            console.log('Command run: '+botprefix+'help rick by user '+message.author);
            msgRespondedTo = true
        }
        if(message.content === botprefix+'help text') {
            const commandEmbed = {
                color: 0xdd9bb4,
                title: "Foxiken Help",
                description: "Get help!",
                fields: [
                    {
                        name: "Here are my text commands:",
                        value: "**"+botprefix+"hello**\nWill respond with one of 8 messages, all of which say hi in different ways.",
                    },
                ],
                timestamp: new Date(),
                footer: {
                    text: "The "+botprefix+"help text command was used.",
                },
            }
            message.channel.send({embed : commandEmbed});
            console.log('Command run: '+botprefix+'help text by user '+message.author);
            msgRespondedTo = true
        }
        if(message.content === botprefix+'help links') {
            const commandEmbed = {
                color: 0xdd9bb4,
                title: "Foxiken Help",
                description: "Get help!",
                fields: [
                    {
                        name: "Here are my commands that link to things:",
                        value: "**"+botprefix+"invite**\nInvite me to your server!\n\n**"+botprefix+"website**\nLinks to the homepage of my website.\n\n**"+botprefix+"join**\nJoin the Foxiken Community discord server!\n\n**"+botprefix+"links**\nLinks to my Linktree page.\n\n**"+botprefix+"upvote** *(currently unavailable)*\nLinks to all the websites where you can (and hopefully will!) vote for me.",
                    },
                ],
                timestamp: new Date(),
                footer: {
                    text: "The "+botprefix+"help links command was used.",
                },
            }
            message.channel.send({embed : commandEmbed});
            console.log('Command run: '+botprefix+'help links by user '+message.author);
            msgRespondedTo = true
        }
        if(message.content === botprefix+'help utilities') {
            const commandEmbed = {
                color: 0xdd9bb4,
                title: "Foxiken Help",
                description: "Get help!",
                fields: [
                    {
                        name: "Here are my utility commands:",
                        value: "**"+botprefix+"version**\nTells you which version I am running.\n\n**"+botprefix+"test**\nTest if I am working.\n\n**"+botprefix+"feedback**\nSuggest something - A new command, bug fix or even a spelling/punctuation correction\n\n**"+botprefix+"dev**\nApply to become a developer\n\n**"+botprefix+"changelog** *(currently unavailable)*\nView the changelog. This is version 11.0.0.\n\n**"+botprefix+"help**\nThis command.\n\n",
                    },
                ],
                timestamp: new Date(),
                footer: {
                    text: "The "+botprefix+"help utilities command was used.",
                },
            }
            message.channel.send({embed : commandEmbed});
            console.log('Command run: '+botprefix+'help utilities by user '+message.author);
            msgRespondedTo = true
        }
        if(message.content === botprefix+'help moderation') {
            const commandEmbed = {
                color: 0xdd9bb4,
                title: "Foxiken Help",
                description: "Get help!",
                fields: [
                    {
                        name: "Here are my moderation commands:",
                        value: "**"+botprefix+"ban**\nBan someone. The ban members permission is required to use this command.\n`Usage: "+botprefix+"ban {user (ping them)} {reason (optional}`\n\n**"+botprefix+"kick**\nKick someone. The kick members permission is required to use this command.\n`Usage: "+botprefix+"kick {user (ping them)} {reason (optional}`",
                    },
                ],
                timestamp: new Date(),
                footer: {
                    text: "The "+botprefix+"help moderation command was used.",
                },
            }
            message.channel.send({embed : commandEmbed});
            console.log('Command run: '+botprefix+'help moderation by user '+message.author);
            msgRespondedTo = true
        }
        if(message.content === botprefix+'help media') {
            const commandEmbed = {
                color: 0xdd9bb4,
                title: "Foxiken Help",
                description: "Get help!",
                fields: [
                    {
                        name: "Here are my moderation commands:",
                        value: "**"+botprefix+"play**\nPlay a song.\n`Usage: "+botprefix+"play {song (search query)}` - You must be in a voice channel to use this command.\n\n**"+botprefix+"skip**\nSkip a song.\n\n**"+botprefix+"stop**\nStop media playback and exit the voice channel.",
                    },
                ],
                timestamp: new Date(),
                footer: {
                    text: "The "+botprefix+"help media command was used.",
                },
            }
            message.channel.send({embed : commandEmbed});
            console.log('Command run: '+botprefix+'help media by user '+message.author);
            msgRespondedTo = true
        }
        if(message.content === botprefix+'help list') {
            const commandEmbed = {
                color: 0xdd9bb4,
                title: "Foxiken Help",
                description: "Get help!",
                fields: [
                    {
                        name: "Here is a list of my commands:",
                        value: botprefix+"hello\n"+botprefix+"ikea\n"+botprefix+"joke\n"+botprefix+"rickroll (tts)\n"+botprefix+"rps\n"+botprefix+"tictactoe\n"+botprefix+"play\n"+botprefix+"skip\n"+botprefix+"stop\n"+botprefix+"ban\n"+botprefix+"kick\n"+botprefix+"invite\n"+botprefix+"join\n"+botprefix+"links\n"+botprefix+"dev\n"+botprefix+"feedback\n"+botprefix+"help\n"+botprefix+"ping\n"+botprefix+"poll\n"+botprefix+"test\n"+botprefix+"version\n"+botprefix+"weather\n"+botprefix+"website",
                    },
                ],
                timestamp: new Date(),
                footer: {
                    text: "The "+botprefix+"help list command was used.",
                },
            }
            message.channel.send({embed : commandEmbed});
            console.log('Command run: '+botprefix+'help list by user '+message.author);
            msgRespondedTo = true
        }
        if(message.content === botprefix+'help') {
            const helpEmbed = {
                color: 0xdd9bb4,
                title: "Foxiken Help",
                description: "Get help!",
                fields: [
                    {
                        name: "Here are the commands you can use to get help:",
                        value: "**Fun:**\nType  `"+botprefix+"help  fun` to see these commands.\n\n**Rick Astley:**\nType  `"+botprefix+"help  rick` to see these commands\n\n**Utilities:**\nType  `"+botprefix+"help  utilities` to see these commands\n\n**Text:**\nType  `"+botprefix+"help  text` to view these commands\n\n**Links:**\nType  `"+botprefix+"help  links` to see these commands\n\n**Moderation:**\nType  `"+botprefix+"help  moderation` to see these commands",
                    },
                ],
                timestamp: new Date(),
                footer: {
                    text: "The "+botprefix+"help  command was used.",
                },
            }
            message.channel.send({embed : helpEmbed});
            console.log('Command run: '+botprefix+'help by user '+message.author);
            msgRespondedTo = true
        }
    }
}