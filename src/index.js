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
        name: 'gooning to jalen',
        type: ActivityType.Custom,
    })
});

client.on('guildMemberAdd', async member => {
    client.channels.cache.get('1269595509656391702')
        .send(`${member.user.tag} just joined our server! Welcome to the Official 'ismism' Server ${member.user.tag}, you poor soul...`);
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
    if (interaction.commandName === 'release-notes') {
        const embed = new EmbedBuilder()
            .setTitle('Here is the link my release notes!')
            .addFields({
                name: ' ',
                value: 'https://github.com/rayaso-0/ismDex/releases'
            })
        interaction.reply({ embeds: [embed] });
    }
    if (interaction.commandName === 'links') {
        const embed = new EmbedBuilder()
            .setTitle('All the IsmIsm links:')
            .setImage('https://i.imgur.com/j7dRqSh.jpg')
            .addFields({
                name: 'Youtube',
                value: 'https://www.youtube.com/@ism-ism-squared',
                inline: false,
            }, {
                name: 'Instagram',
                value: 'https://www.instagram.com/ismism_squared',
                inline: false,
            }, {
                name: 'Tiktok',
                value: 'https://www.tiktok.com/@ismism_squared',
                inline: false,
            })
        interaction.reply({ embeds: [embed] });
    }
    if (interaction.commandName === 'rayaso_bio') {
        const embed = new EmbedBuilder()
            .setTitle("Meet Rayaso!")
            .setDescription('\nRayaso is the lead Developer for the ismDex discord bot and one of the Founding Members of IsmIsm. Doing things from recording gameplay with the others or working behind the scenes like editing videos or coding this very bot!\nHe is very excited for the future is IsmIsm and cant wait to create a community of like-minded people who like all things gaming.\nDont hesitate to reach out for anything!\n')
            .setColor('DarkPurple')
            .setImage('https://i.imgur.com/fOFXFxQ.jpg')
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
            .setDescription('\nGroovy is one of the founding members of IsmIsm.\nHe has always been passionate about content creation and the arts including, streaming, editing, music, and voice acting. To get into specifics of music, He has 7 years of choral work and is a self-taught percussionist.\nGroovy started content-creating in 2019 with an unedited Overwatch video, dont look for it. Since then the quality of their edits has increased but there will always be room for improvement! When it comes to IsmIsm Groovy does a lot of the organizing and administrative work.\n')
            .setColor('Orange')
            .setImage('https://i.imgur.com/MHP9lmb.jpg')
            .addFields({
                name: 'Twitch',
                value: 'https://www.twitch.tv/groovykobold',
                inline: true
            }, {
                name: 'Youtube',
                value: 'https://www.youtube.com/@GroovyKobold',
                inline: true
            })

        interaction.reply({ embeds: [embed] });

    }
    if (interaction.commandName === 'airthyus_bio') {
        const embed = new EmbedBuilder()
            .setTitle("Meet Airthyus!")
            .setDescription('\ntest\n')
            .setColor('DarkRed')
            .addFields({
                name: 'test',
                value: 'test',
                inline: true
            }, {
                name: 'test',
                value: 'test',
                inline: true
            }, {
                name: 'test',
                value: 'test',
                inline: true
            })

        interaction.reply({ embeds: [embed] });

    }
    if (interaction.commandName === 'jalen_bio') {
        const embed = new EmbedBuilder()
            .setTitle("Meet Jalen!")
            .setDescription('\nJalen is one of the founding members of IsmIsm. With a strong passion in gaming, he wants to go further than that and see where life takes him. He is currently interested in becoming a Voice Actor.\nBut on top of all of this, he is the number one Steph Curry fan on the planet. You cant take the Curry out of Jalen.\nHe leaves with one quote..."#Feminist"\n')
            .setColor('NotQuiteBlack')
            .setImage('https://i.imgur.com/rNZKe9mh.jpg')
            .addFields({
                name: 'Instagram',
                value: 'https://www.instagram.com/jalen.ex/',
                inline: true
            }, {
                name: 'Twitch',
                value: 'https://www.twitch.tv/jalenex',
                inline: true
            }, {
                name: 'Youtube',
                value: 'https://www.youtube.com/@JalenEx',
                inline: true
            })

        interaction.reply({ embeds: [embed] });

    }

});

client.login(process.env.TOKEN);

