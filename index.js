const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.token;

const PREFIX = '!!'

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
            if(args.length >= 2){
                msg.react(args[1]);
                console.log(msg.reactions.cache.get());
            }
            break;
        case 'gm':
            //!!gm channelID messageID
            if(args.length >= 3){
                //do stuff
                for(i in bot.channels.cache){
                    console.log(bot.channels.fetch(args[1]));
                }
                msg.delete();
            }
    }
})

bot.login(token);