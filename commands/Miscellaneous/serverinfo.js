const Discord = require('discord.js');

module.exports = {
    name: "serverinfo",
    description: "Displays info about the server.",
    category: "Miscellaneous",
    execute(client, message, args) {
        let sicon = message.guild.displayAvatarURL;
        let serverembed = new Discord.RichEmbed()
            .setDescription("Server Information")
            .setColor(0x42f47a)
            .setThumbnail(sicon)
            .addField("Server Name", message.guild.name)
            .addField("Created On", message.guild.createdAt)
            .addField("You Joined", message.member.joinedAt)
            .addField("Total Members", message.guild.memberCount);

        return message.channel.send(serverembed);
    }
}