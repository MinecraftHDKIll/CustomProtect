const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDc0NTIwMTcxMDU1MTUzMTU0.DkR1JQ.uNpzqpIXb3PF7Oc7iZL-H-S-sFI);
