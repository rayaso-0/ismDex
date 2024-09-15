require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'touch',
        description: 'Replies with Im gonna touch you Jalen.',
    },
    {
        name: 'info',
        description: 'Replies with the information about ismDex discord bot.',
    },
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