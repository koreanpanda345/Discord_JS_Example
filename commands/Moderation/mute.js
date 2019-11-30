const Discord = require('discord.js');

module.exports = {
    name: "mute",
    description: "allows you to mute a user.",
    category: "Moderation",
    hasArgs: true,
    args: "who do you want to mute",
    async execute(bot, message, args){
        if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("You don't have permission to use this command");
        
        if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permission to add roles.");

        let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
        let reason = args.slice(1).join(" ");

        if(!reason) reason = "No reason given";

        let muteRole = message.guild.roles.find(r => r.name === "Muted")
        if(!muteRole){
            try {
                muteRole = await message.guild.createRole({
                    name: "Muted",
                    color: "#514f48",
                    permission: [],
                })
                message.guild.channels.forEach(async(channel, id) => {
                    await channel.overwritePermission({
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                        SEND_TTS_MESSAGES: false,
                        ATTACH_FILES: false,
                        SPEAK: false,
                    });
                });
            } catch (e) {
                console.log(e.stack);
            }
        }
        mutee.addRole(muteRole.id).then(() => {
            message.delete();
            mutee.send(`Hello you have been muted in ${message.guild.name} for: ${reason}`);
            message.channel.send(`${mutee.user.username} was successfully muted.`);
        })

        let embed = new Discord.RichEmbed();
        embed.setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL);
        embed.addField(`Moderation`, "Mute");
        embed.addField(`Mutee`, mutee.user.username);
        embed.addField(`Moderator`, message.author.username);
        embed.addField(`Reason`, reason);
        embed.addField(`Date`, message.createdAt);
        let sChannel = message.guild.channels.find(ch => ch.name === "mod-logs");
        sChannel.send(embed);


    }
}