# FILES

**1) ./index.js**
The main file: Starts the bot, handles commands, etc.

**2) ./config.json**
Configuration files, contains the token and prefix. (if you change the token, make sure to change all of the 'botprefix' variables in all the .js files in the commands folder to the new token, otherwise some commands may be inconsistant)

**3) ./Procfile**
Heroku's startup file - tells heroku what command to run on startup.

**4) ./package.json**
Package info

**5) ./package-lock.json**
Another package info file

**6) ./.gitignore**
Tells git to ignore a couple folders on my PC when uploading to github


# ./commands/
**The ./commands/ folder contains all the commands for the bot.** If you want to add a new command, duplicate the template.js file, and follow these rules:
1) Type the command name **WITHOUT THE PREFIX** in the 'name' field.
    For example:
    *module.exports = {*
        **name: "hello",**

2) (optional) Type a description for the command in the 'description field.
    For example:
    *module.exports = {*
       *name: "hello",*
        **description: "hello command",**

3) Whenever typing the prefix in the command, replace it with the botprefix variable. 
    For example:
    **message.channel.send('the `f/test` command was used')**
    would turn into:
    **message.channel.send('The `'+botprefix+'test` command was used')**

4) Any command will be put in fixed-width font.
    For example:
    **message.channel.send('The '+botprefix+'test command was used.')**
    would turn into:
    **message.channel.send('The `'+botprefix+'test` command was used.')**

If you wish to be added to the heroku app, DM me on discord.

*Let me know if you have any other questions :)*