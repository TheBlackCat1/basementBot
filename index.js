const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.token;

const PREFIX = '!!'

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            msg.channel.send('pong');
        break
    }
})

bot.login(token);