const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js')

module.export = {
    name: 'bans',
    description: 'bans a member from the server.',
    // devOnly: Boolean,
    // testOnly: Boolean,
    options: Object[{
        name: 'target-user',
        description: 'The user to ban.',
        required: true,
        type: ApplicationCommandOptionType.Mentionable
    },
    {
        name: 'reason',
        description: 'The reason for banning.',
        required: false,
        type: ApplicationCommandOptionType.String
    }
    ],
    permissionRequired: [PermissionFlagsBits.Administrator],

    callback: (client, interaction) => {
        interaction.reply('ban..');
    },
}