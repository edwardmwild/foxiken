const { tictactoe } = require('reconlx')
module.exports = {
    name: "tictactoe",
    description: "tic tac toe command",
    async run (bot, message, args) {
        const member = message.mentions.members.first()
        if(!member) return message.channel.send('Specify a user to play with.');
        new tictactoe({
            player_two: member,
            message: message
        })
        console.log('Command run: '+botprefix+'tictactoe by user '+message.author)
    }
}