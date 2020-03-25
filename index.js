const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.token;

const PREFIX = '!!'

bot.on('ready', () =>{
    console.log('This bot is online!');
    console.log(bot.channels);
})

bot.on('message', msg=>{
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            msg.channel.send('pong');
            break;
        case 'rr':
            if(args.length >= 2){
                msg.react(args[1]);
            }
            break;
        case 'm':
            if(args.length >= 3){
                var i;
                for(i in bot.channels[1]){
                    console.log(i);
                }
            }
            break;
    }
})

bot.login(token);