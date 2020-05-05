const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.token;

const PREFIX = '!!'

var reactionMessages = [];


bot.on('ready', () =>{
    console.log('This bot is online!');
    //console.log(bot.channels);
    bot.user.setActivity('OASIS', {type: 'PLAYING'});
})

bot.on('message', msg=>{
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            msg.channel.send('pong');
            break;
        case 'rr':
            if(args.length == 3){
                var message = [args[1], args[2]];
                reactionMessages.push(message);
                console.log(message);
            }
            console.log(reactionMessages);
            break;
    }
})

bot.on('messageReactionAdd', gae=>{
    console.log('gruh');
})

bot.login(token);