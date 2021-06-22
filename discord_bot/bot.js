const Discord = require('discord.js');
const client = new Discord.Client();
const keepAlive = require("./server")


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

keepAlive()
client.login("ODU2ODQ0NzI1MTM0MDMyODk3.YNG81Q.HRroiQ4Ci-zycbjgDHmA6Tk8MSw")