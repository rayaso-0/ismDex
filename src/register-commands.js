require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType, Application, ApplicationCommandOptionWithAutocompleteMixin } = require('discord.js');

const commands = [
    {
        name: 'touch',
        description: 'Replies with Im gonna touch you Jalen.',
    },
    {
        name: 'info',
        description: 'Replies with the information about ismDex discord bot.',
    },
    {
        name: 'tos',
        description: 'Link to the Terms Of Service',
    },
    {
        name: 'privacypolicy',
        description: 'Link to the Privacy Policy',
    },
    {
        name: 'github',
        description: 'Link to the github repo for the ismDex discord bot',
    },
    {
        name: 'rayaso_bio',
        description: 'Bio for Rayaso',
    },
    {
        name: 'groovy_bio',
        description: 'Bio for Groovy',
    },
    {
        name: 'airthyus_bio',
        description: 'Bio for Airthyus'
    },
    {
        name: 'jalen_bio',
        description: 'Bio for Jalen'
    },
    {
        name: 'links',
        description: 'All ismism links'
    },
    {
        name: 'flipacoin',
        description: 'literally just flip a coin'
    }

];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering slash commands...');
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID
            ),
            { body: commands }
        )

        console.log('Slash commands were registered successfully!');
    } catch (error) {
        console.log(`There was an error: ${error}`);
    }
})();