const Discord = require('discord.js');

module.exports = {
    name: "math",
    description: "Solves a math problem for you",
    category: "Miscellaneous",
    hasArgs: true,
    Args: "what do you want me to solve?",
    execute(client, message, args) {
        let num1 = parseInt(args[0], 10);
        let operation = args[1];
        let num2 = parseInt(args[2], 10);
        let embed = new Discord.RichEmbed();
        embed.setTitle(`Solving ${num1} ${operation} ${num2}`);
        if (operation === "+") {
            embed.setDescription(Math.floor(num1 + num2));
        }
        if (operation === "-") {
            embed.setDescription(Math.floor(num1 - num2));
        }
        if (operation === "*") {
            embed.setDescription(Math.floor(num1 * num2));
        }
        if (operation === "/") {
            embed.setDescription(Math.floor(num1 / num2));
        }
        message.channel.send(embed);
    },
}