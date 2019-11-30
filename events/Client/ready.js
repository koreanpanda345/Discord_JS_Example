const ready = require('../../ready.json');
const {readdirSync} = require('fs');
module.exports = async bot =>{

    let status = ready.status;
    let desc = ready.description;
    let guilds = false;
    if(desc === ""){
        bot.user.setActivity("+!help", {type: "WATCHING"});
    }
    else {
        bot.user.setActivity(desc, {type: "WATCHING"});
    }
    if(status === "online"){
        bot.user.setStatus("online")
        .then(console.log)
        .catch(console.error);
    }
    else if(status === "idle"){
        bot.user.setStatus("idle")
        .then(console.log)
        .catch(console.error);
    }
    else if(status === "dnd"){
        bot.user.setStatus("dnd")
        .then(console.log)
        .catch(console.error);
    }
    else if(status === "inv"){
        bot.user.setStatus("invisible")
        .then(console.log)
        .catch(console.error);
    }
    else{
        bot.user.setStatus("online")
        .then(console.log)
        .catch(console.error);
    }
     const commands = readdirSync("./commands/");
     commands.forEach(dirs => {
         const command = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'));
         console.log(`${dirs}`);
         console.log(command);
     })
    
     const events = readdirSync("./events/");
     events.forEach(dirs => {
        const event = readdirSync(`./events/${dirs}/`).filter(d => d.endsWith('.js'));
        console.log(`${dirs}`);
        console.log(event);
     })


    bot.channels.get("Your_channel").send(`
    Bot User: ${bot.user.tag}
    Bot Connection: ${bot.user.presence.status}
    Presence: ${bot.user.presence.game}
    Start Time: ${new Date()}
    Shards: 0
    `,{code: true});
    if(guilds){
        console.log(`{Your bot} is in ${bot.guilds.size} servers, ${bot.channels.size} channels, and ${bot.users.size} users.`);
    const guildMemberCount = bot.guilds.map(g => g.memberCount).join('\n');
    const guildNames = bot.guilds.map(g => g.name).join("\n");
    console.log("Guilds:");
    console.log(`${guildNames}`);
    //console.log(`${guildMemberCount}`);
    }

}