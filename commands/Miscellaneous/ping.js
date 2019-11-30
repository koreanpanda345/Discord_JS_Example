
module.exports = {
    name: 'latency',
    aliases: ['ping'],
    description: "Displays the Bot's latency",
    category: "Miscellaneous",
    execute(client, message, args) {
        message.channel.send(`${client.ping} ms`);
    },
}