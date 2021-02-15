const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

var command = "!gönder ";

const webHook = new Discord.WebhookClient(config.id, config.token);

client.on('message', async message => {
    const args = message.content.slice(command.length).trim().split(/ +/).join(' ');
    if(message.content.toLowerCase() === command + args) {
        webHook.send(args)
    }
});

client.login(config.botToken).then(() => console.log('Bot başarıyla girdi!')).catch(() => console.log('Bot giriş yapamadı :('))
//bruhboy345