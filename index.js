//We only need the client, and the collection.
const {Client, Collection} = require('discord.js');
//this is creating the bot object to interact with the client class.
const bot = new Client({disableEveryone: true});
//we only need to grab the token.
const {token} = require("setting.json");
//this is creating the bot.commands() collection.
["commands"].forEach(x => client[x] = new Collection());
//this is sending to the command and event handlers.
["command", "event"].forEach(x => require(`./handler/${x}`)(bot));
//this logins the bot in.
bot.login(token);