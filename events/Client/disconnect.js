const Discord = require('discord.js');

module.exports = client => {
    console.log(`You have been disconnect at ${new Date()}.`);
    client.channels.get("603294461002252317").send(`Uptime was ${client.uptime}ms`, { code: true });

}