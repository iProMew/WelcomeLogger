const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });
const { token } = require('./config.json');
const { WELCOME_CHANNEL_ID } = require('./config.json');

console.log('Starting bot, please give me a second.');
client.on('ready', () => {
    console.log('I am ready to welcome people!');
});

client.on("guildMemberAdd", member => {
    WelcomeNewMember(member);
});

function WelcomeNewMember(member) {
    const channel = client.channels.fetch(WELCOME_CHANNEL_ID)
        .then(channel => {
            setTimeout(function () {
              
                console.log("Welcoming a new member.");
                channel.send('Welcome <@' + member.id + '> to the server! :tada:');
            }, 1000);
        })
        .catch(console.error);
}

client.login(token);