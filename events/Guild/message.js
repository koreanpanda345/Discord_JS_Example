//This is the message event. when a message in the server is sent, it goes through this event.
const {prefix} = require("setting.json");
const fs = require('fs');
module.exports = async (bot, message) => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;

    if (message.content.toLowerCase().includes(prefix)) {
        const args = message.content.slice(prefix.length).split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command = bot.commands.get(commandName)
            || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) return;

        if (command.hasArgs && !args.length) {
            return message.channel.send(command.args);
        }

        try {
            command.execute(bot, message, args);
        } catch (error) {
            console.error(error);
            message.channel.send('There was an error trying to execute that command');
        }
    }

}