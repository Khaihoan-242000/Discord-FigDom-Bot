const Command = require('../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['pong']
		});
	}

	async run(message) {
		const msg = await message.channel.send('Pinging...');

		const latency = msg.createdTimestamp - message.createdTimestamp;

		msg.edit(`Bot Latency: \`${latency}ms\`, API Latency: \`${Math.round(this.client.ws.ping)}ms\``);
	}

};