const { Client } = require('discord.js');
const token =  process.env.token;

const prefix = '!';

const app = new Client();


app.on('ready', () => {
    console.log('Bem-te-vi');
});


app.on('message', async (message) => {
    if (message.content === `${prefix}btv`){
            message.member.voice.channel.join().then(connection => {
            const dispatcher = connection.play('btv.mp3');
            message.reply('bem-te-vi')
            dispatcher.on('finish', () => { message.member.voice.channel.leave() });
        });
    } 
});

app.login(token);