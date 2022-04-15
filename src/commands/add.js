const fs = require('fs')
const {Formatters} = require("discord.js")

const youtube = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/


const addSong = (msg, args) => {
	console.log(args)
	try{
		const {links} = JSON.parse(fs.readFileSync('./data/links.json'))
		link = {
			"link": args[0],
			"tags": args.slice(1),
			"added_by": {"id": msg.author.id, "username": msg.author.username}
		},
		links.push(link)
		fs.writeFileSync('./data/links.json', JSON.stringify({links}))
		msg.reply("added")
	}catch(e){
		msg.reply("error")
		console.error(e)
	}
}

module.exports = {
	name: 'add',
	execute: addSong
}
