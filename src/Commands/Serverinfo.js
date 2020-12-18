const Command = require('../Structures/Command');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

const filterLevels = {
	DISABLED: 'Off',
	MEMBERS_WITHOUT_ROLES: 'No Role',
	ALL_MEMBERS: 'Everyone'
};

const verificationLevels = {
	NONE: 'None',
	LOW: 'Low',
	MEDIUM: 'Medium',
	HIGH: '(╯°□°）╯︵ ┻━┻',
	VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};

const regions = {
	brazil: 'Brazil',
	europe: 'Europe',
	hongkong: 'Hong Kong',
	india: 'India',
	japan: 'Japan',
	russia: 'Russia',
	singapore: 'Singapore',
	southafrica: 'South Africa',
	sydeny: 'Sydeny',
	'us-central': 'US Central',
	'us-east': 'US East',
	'us-west': 'US West',
	'us-south': 'US South'
};

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['server', 'guild', 'guildinfo'],
			description: 'Displays information about the server that said message was run in.',
			category: 'Information'
		});
	}

	async run(message) {
		const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
		const members = message.guild.members.cache;
		const channels = message.guild.channels.cache;
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
				])
				.addField('Số Liệu Thông Kê', [
					`**Số Lượng Vai Trò:** ${roles.length}`,
					`**Số Thành Viên:** ${message.guild.memberCount}`,
					`**Humans:** ${members.filter(member => !member.user.bot).size}`,
					`**Bots:** ${members.filter(member => member.user.bot).size}`,
					`**Kênh Văn Bản:** ${channels.filter(channel => channel.type === 'text').size}`,
					`**Kênh Thoại:** ${channels.filter(channel => channel.type === 'voice').size}`,
					'\u200b'
				])
				.addField('Trạng Thái Hoạt Động', [
					`**Online:** ${members.filter(member => member.presence.status === 'online').size}`,
					`**Idle:** ${members.filter(member => member.presence.status === 'idle').size}`,
					`**Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd').size}`,
					`**Offline:** ${members.filter(member => member.presence.status === 'offline').size}`,
					'\u200b'
				])
				.addField(`Roles [${roles.length - 1}]`, roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'None')
				.setTimestamp();
			message.channel.send(embed);
	}

};