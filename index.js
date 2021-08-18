const {Intents, Client} = require('discord.js');
const token = 'ODc3MzIxNDQ5MjU2NDExMTk2.YRw7RQ.iWJpf_lvLrXM3P0h7Trlefn3mb0'; //process.env.TOKEN;

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