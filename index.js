const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.author.bot) return;
    if (message.content === '!hello') {
        message.channel.send('Hello!');
    }
});

client.login('MTA3NDAyNjgyMDM4MDM5NzYxOA.GXaYL9.4zHqn_Y8aLov-EhiRoNvXZrPJBAfcXqGg9IJMQ');
