const fs = require('fs')
const { Client, Intents, Collection } = require('discord.js')
require("dotenv").config()

const defaultLinks = {
	"links": [
		{
			"link": "https://www.youtube.com/watch?v=dLe40q0g3Vw",
			"tags": [
				"6"
			],
			"added_by": ""
		},
		{
			"link": "https://www.youtube.com/watch?v=EMhANHI9YhA",
			"tags": [
				"4"
			],
			"added_by": ""
		},
		{
			"link": "https://www.youtube.com/watch?v=dRTefk-XgDU",
			"tags": [
				"5"
			],
			"added_by": ""
		},
		{
			"link": "https://www.youtube.com/watch?v=63eYyhpW1Bo",
			"tags": [
				"5"
			],
			"added_by": ""
		},
		{
			"link": "https://www.youtube.com/watch?v=BiUp3DpksQY",
			"tags": [
				"4"
			],
			"added_by": ""
		},
		{
			"link": "https://www.youtube.com/watch?v=c_H3MWVx6JU",
			"tags": [],
			"added_by": ""
		},
	]
}

const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS] })
client.commands = new Collection()
const { TOKEN } = process.env
const { prefix } = require('../config.json')


const commandFiles = fs.readdirSync('./src/commands').filter((file) => file.endsWith('.js'))
commandFiles.forEach((file) => {
	const command = require(`./commands/${file}`)
	client.commands.set(command.name, command)
})


client.once('ready', () => {
	console.log('Ready!')
	if (!fs.existsSync("./data")){
		fs.mkdirSync("./data");
	}
	fs.writeFileSync('./data/links.json', JSON.stringify(defaultLinks))
	fs.writeFileSync('./data/sent.json', JSON.stringify([]))
})



client.on('messageCreate', (msg) => {

	const args = msg.content.slice(prefix.length).trim().split(/ +/)
	const command = args.shift().toLowerCase()
	if (!(client.commands.has(command))) return
	try {
		client.commands.get(command).execute(msg, args)
	} catch (error) {
		console.error(error)
		msg.reply('there was an error trying to execute that command!')
		msg.reply
	}
})


client.login(TOKEN)