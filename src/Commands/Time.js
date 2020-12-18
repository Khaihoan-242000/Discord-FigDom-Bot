const Command = require('../Structures/Command');
const ms = require('ms');
const timePlate = new Date();

module.exports = class extends Command {

	async run(message) {
		message.channel.send(`Bây Giờ Là: \`${timePlate.getHours()}:${timePlate.getMinutes()}\`, Ngày: \`${timePlate.getDate()}/${timePlate.getMonth()+1}/${timePlate.getFullYear()}\`, Thới Gian Chạy Của Tôi: \`${ms(this.client.uptime, { long: true })}\`.`)
	}
};