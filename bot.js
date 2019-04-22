const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log('Logged in as ${client.user.tag}!');
 });

client.on('message', msg => {
 if (msg.content === '!ping') {
 msg.reply('pong');
 }
 });

client.login('NTY5OTM1MTgxNjQxODA5OTIx.XL4Arg.yrq0tDozYX-SGdjZcART9uGr4WQ');