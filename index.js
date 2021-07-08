const Discord = require('discord.js')

const client = new Discord.Client();


client.on('ready', () =>{
    console.log('NetherBot is online!');
})

client.on('message', msg=>{
    if(msg.content === "Nether Client"){
        msg.reply('Nether Client is not released yet please be patient.');
    }
})

client.login(process.env.token)
