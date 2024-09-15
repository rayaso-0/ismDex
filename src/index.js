require('dotenv').config();
const { Client, IntentsBitField, messageLink, userMention, User } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`✅ ${c.user.tag} is online.`);
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'touch') {
        interaction.reply('Im gonna touch Jalen ;)')
    }
    if (interaction.commandName === 'info') {
        interaction.reply('ismDex is a WIP discord bot designed for the one and only discord server IsmIsm. More information to come!')
    }

});

client.login(process.env.TOKEN);

