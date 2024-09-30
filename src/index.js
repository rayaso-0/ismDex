require('dotenv').config();
const { Client, IntentsBitField, ActivityType, messageLink, userMention, User, Embed, EmbedBuilder } = require('discord.js');
const eventHandlers = require('./handlers/eventHandler');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

eventHandlers(client);

client.on("message", (msg) => {
    let isWelcomeMessage = msg.type === 'GUILD_MEMBER_JOIN'

    if (isWelcomeMessage) {
        msg.author.send(`Welcome to the IsmIsm discord server, ${msg.author.username}!`)
        client.channels.cache.get('1269595509656391702').send(`${msg.author.username}, thank you for graciously granted us with your presence.`)
    }

    let message = msg.content;
    let channel = msg.channelID;
    let botChannel = "1269595509656391702"
})

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
    if (interaction.commandName === 'help') {
        interaction.reply('Go to the "ismDex-bot-info" channel if you need any help!>')
    }
    if (interaction.commandName === 'release-notes') {
        const embed = new EmbedBuilder()
            .setTitle('Here is the link my release notes!')
            .setImage('https://i.imgur.com/j7dRqSh.jpg')
            .addFields({
                name: ' ',
                value: 'https://github.com/rayaso-0/ismDex/releases',
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
            .setDescription('\nAirthyus is one of the founding members of IsmIsm.\nWith a strong passion in gaming and math, he wants to go further than that and see where life takes him. He is currently interested in fighter games such as Tekken, MK and brawlhalla. He occasionally plays apex and overwatch. He does a lot behind the scenes for Ism so be on the lookout for him! \n')
            .setColor('DarkRed')
            .setImage('https://i.imgur.com/dy4juGO.jpg')
            .addFields({
                name: 'Youtube',
                value: 'https://www.youtube.com/@Nexonnite',
                inline: true
            }, {
                name: 'Twitch',
                value: 'https://www.twitch.tv/airthyus',
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

