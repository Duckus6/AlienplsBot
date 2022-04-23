const fs = require('fs')


const toggleSpoiler = (msg) => {
	try{
		const config = JSON.parse(fs.readFileSync('./config.json'))
		config.spoiler = !config.spoiler
		fs.writeFileSync('./config.json',JSON.stringify(config))
		msg.reply(`Spoiler set to ${config.spoiler}`)
	}catch(e){
		msg.reply("error")
		console.error(e)
	}
}

module.exports = {
	name: 'toggle',
	execute: toggleSpoiler
}
