//this handles all the commands
const {readdirSync} = require("fs");
module.exports = (bot) => {
    const load = dirs => {
        const commands = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'));
        for(let file of commands){
            const cmd = require(`../commands/${dirs}/${file}`);
            bot.commands.set(cmd.name, cmd);
        }
    }
    //make sure you include all of the folders in the commands folder.
    ["Miscellaneous", "Moderation"].forEach(x => load(x));
}