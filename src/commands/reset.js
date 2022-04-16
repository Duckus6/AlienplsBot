const fs = require('fs')


const reset = (msg) => {
	try{
		fs.writeFileSync('./data/sent.json', JSON.stringify([]))
		msg.reply("links reset")
	}catch(e){
		msg.reply("error")
		console.error(e)
	}
}

module.exports = {
	name: 'reset',
	execute: reset
}
