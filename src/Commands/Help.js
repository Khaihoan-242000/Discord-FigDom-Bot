const Command = require('../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {
    constructor(...args) {
        super(args, {
            aliases: ['he']
        });
    }
    async run(message) {
        const embed = new MessageEmbed()
        .setAuthor(this.client.user.username, this.client.user.displayAvatarURL())
        .setTitle(`**Guild information for __${message.guild.name}__**`)
        .setColor('#fad390')
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField('Thông Tin Chung', [
            `**Tên Server:** ${message.guild.name}`,
            `**ID:** ${message.guild.id}`,
            `**Chủ Server:** ${message.guild.owner.user.tag} (${message.guild.ownerID})`,
            `**Khu Vực:** ${regions[message.guild.region]}`,
            `**Bật Đã Tăng:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
            `**Time Created:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
            '\u200b'
        ]);
        message.channel.send(embed);
    }
};