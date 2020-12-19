const { MessageEmbed } = require('discord.js')
const Command = require('../Structures/Command')

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            aliases: 'avatar'
        })
    }

    async run(message, [target]) {
        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
		// const roles = member.roles.cache
		// 	.sort((a, b) => b.position - a.position)
		// 	.map(role => role.toString())
		// 	.slice(0, -1);
		const userFlags = member.user.flags.toArray();
        const embed = new MessageEmbed()
        .setAuthor(this.client.user.username, this.client.user.displayAvatarURL())
        .setImage(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
        .setColor('#fad390')
        .setTimestamp()
        message.channel.send(embed)
    }
}