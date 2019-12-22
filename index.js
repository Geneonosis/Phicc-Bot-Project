const Discord = require('discord.js');
//const config = require('./config.json');
const {token} = require('./config.json')
const {prefix, responses} = require('./usage.json')

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    
    //If the message starts with '!phicc' then the
    //user is addressing the bot (me) and I need
    //to respond to the user with one of my many
    //dialogue options
    if(message.content.startsWith(`${prefix}phicc`)){
        
        message.channel.send(responses[getRandomInt(Object.keys(responses).length)]);
    } 
});

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}

client.login(token);