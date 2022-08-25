const express = require('express');
const server = express();

server.all('/', (req, res)=>{
    res.send("I see you discoreved the webpage associated with my discord bot, foxiken.\n(go invite it if you haven't already - https://bit.ly/foxiken-invite :D)\n\n now this website is just to keep the bot alive, please don't ddos it or anything. other than that, this website has no purpose so please just invite the ot and leave this website.")
})

function keepAlive(){
    server.listen(3000, ()=>{console.log("Server is Ready!")});
}

module.exports = keepAlive;