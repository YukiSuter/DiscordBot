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
    {
    "attachments": [
        {
            "fallback": "Cibo Information",
            "color": "#36a64f",
            "pretext": " ",
            "title": "About Cibo",
            "title_link": "https://www.roblox.com/groups/group.aspx?gid=3267244",
            "text": "Welcome to Cibo®!",
            "fields": [
                {
                    "title": "“Where dreams develop into a reality”",
                    "value": "Cibo® is an Italian-based restaurant, known for its satisfaction and superior quality provided.",
                    "short": false
                }
            ],
            "footer": "Cibo",
            "ts": 123456789
        }
    ]
}
  }
});



client.on('message', message => {
  if (message.content === '!help') {
    message.reply('some commands include "!about", "!join" and "!music" <== Currently not working :I');
  }
});

client.login('MzIwNTk3MDMxOTEzNjUyMjM2.DBSJPA.BtTDREzPXuB3nYH-q6OqQGiv6jY');
