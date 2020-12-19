const { MessageEmbed } = require('discord.js')
const Command = require('../../Structures/Command')

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            aliases: 'Pubg'
        })
    }

    async run(message) {
        const embed = new MessageEmbed()
        .setAuthor(this.client.user.username, this.client.user.displayAvatarURL())
        .setColor('#fad390')
        .setTimestamp()

        message.channel.send(embed)
    }
}