require('dotenv').config();
const { Client, IntentsBitField, ActivityType, messageLink, userMention, User, Embed, EmbedBuilder } = require('discord.js');

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

    client.user.setActivity({
        name: 'Actively Gooning to Jalen',
        type: ActivityType.Custom,
    })
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'touch') {
        interaction.reply('Im gonna touch Jalen ;)')
    }
    if (interaction.commandName === 'info') {
        interaction.reply('ismDex is a WIP discord bot designed for the one and only discord server IsmIsm. More information to come!')
    }
    if (interaction.commandName === 'tos') {
        interaction.reply('Here is the link to the Terms of Service: https://github.com/rayaso-0/ismDex/blob/main/TERMS-OF-SERVICE.md')
    }
    if (interaction.commandName === 'privacypolicy') {
        interaction.reply('Here is the link to our Privacy Policy: https://github.com/rayaso-0/ismDex/blob/main/PRIVACYPOLICY.md')
    }
    if (interaction.commandName === 'github') {
        interaction.reply('Here is the link to our GitHub Repository: https://github.com/rayaso-0/ismDex')
    }
    if (interaction.commandName === 'rayaso_bio') {
        const embed = new EmbedBuilder()
            .setTitle("Meet Rayaso!")
            .setDescription('\nRayaso is one of the Co-Founding Members of IsmIsm. Doing things from recording gameplay with the others or working behind the scenes like editing videos or coding this very bot!\nHe is very excited for the future is IsmIsm and cant wait to create a community of like-minded people who like all things gaming.\nDont hesitate to reach out for anything!\n')
            .setColor('DarkPurple')
            .addFields({
                name: 'LinkedIn Profile:',
                value: 'https://www.linkedin.com/in/kristoefb/',
                inline: true
            }, {
                name: 'Youtube:',
                value: 'https://www.youtube.com/@rayaso6036',
                inline: true
            }, {
                name: 'Twitch Channel:',
                value: 'https://www.twitch.tv/rayaso_0',
                inline: true
            })
        interaction.reply({ embeds: [embed] });
    }
    if (interaction.commandName === 'groovy_bio') {
        const embed = new EmbedBuilder()
            .setTitle("Meet Groovy!")
            .setDescription('\n\n')
            .setColor('Orange')
            .addFields({
                name: '',
                value: '',
                inline: true
            }, {
                name: '',
                value: '',
                inline: true
            }, {
                name: '',
                value: '',
                inline: true
            }, {
                name: '',
                value: '',
                inline: true
            })

        interaction.reply({ embeds: [embed] });

    }
    if (interaction.commandName === 'airthyus_bio') {
        const embed = new EmbedBuilder()
            .setTitle("Meet Airthyus!")
            .setDescription('\n\n')
            .setColor('DarkRed')
            .addFields({
                name: '',
                value: '',
                inline: true
            }, {
                name: '',
                value: '',
                inline: true
            }, {
                name: '',
                value: '',
                inline: true
            }, {
                name: '',
                value: '',
                inline: true
            })

        interaction.reply({ embeds: [embed] });

    }
    if (interaction.commandName === 'jalen_bio') {
        const embed = new EmbedBuilder()
            .setTitle("Meet Jalen!")
            .setDescription('\n\n')
            .setColor('NotQuiteBlack')
            .addFields({
                name: '',
                value: '',
                inline: true
            }, {
                name: '',
                value: '',
                inline: true
            }, {
                name: '',
                value: '',
                inline: true
            }, {
                name: '',
                value: '',
                inline: true
            })

        interaction.reply({ embeds: [embed] });

    }
});

client.login(process.env.TOKEN);

