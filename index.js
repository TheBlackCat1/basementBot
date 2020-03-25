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
                var chan = bot.channels.cache.find(ch => ch.name === 'general');
                var chanid = chan.id;
                console.log(chanid);
            }
            break;
    }
})

bot.login(token);