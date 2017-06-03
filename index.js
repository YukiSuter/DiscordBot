const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('CiboBot Online!');
});

client.on('message', message => {
  if (message.content === '!join') {
    message.reply('Join Cibo now at https://www.roblox.com/groups/group.aspx?gid=3267244');
  }
});

client.on('message', message => {
  if (message.content === '!about') {
    message.reply('Welcome to Cibo®! “Where dreams develop into a reality” Cibo® is an Italian-based restaurant, known for its satisfaction and superior quality provided.');
  }
});

client.on('message', message => {
  if (message.content === '!music') {
    message.reply('Coming soon to the cibo discord!');
  }
});



client.on('message', message => {
  if (message.content === '!help') {
    message.reply('some commands include "!about", "!join" and "!music" <== Currently not working :I');
  }
});

client.login('MzIwNTk3MDMxOTEzNjUyMjM2.DBSJPA.BtTDREzPXuB3nYH-q6OqQGiv6jY');
