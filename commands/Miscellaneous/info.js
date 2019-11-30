const Discord = require('discord.js');

module.exports = {
    name: "info",
    aliases: ["botinfo", "bot"],
    hasArgs: false,
    args: "",
    description: "Displays info about me",
    category: "Miscellaneous",
    execute(client, message, args) {
        let clientEmbed = new Discord.RichEmbed()
            .addField("Panda Bot", "This is Panda Bot, Design to make people love pandas (^-^). And Panda Bot knows all, nothing can outmatch him.", true)
            .addField("Creator", "Koreanpanda345#2878", true)
            .addField("Library", "discord.js")
            .setAuthor(message.guild.me.displayName, message.guild.iconURL)
            .setThumbnail(client.user.displayAvatarURL)
            .setColor(0x42f47a)
            .setFooter("GIVE ME BAMBOO")
            .addField("Created On", message.client.user.createdAt);
        return message.channel.send(clientEmbed);
    },
};