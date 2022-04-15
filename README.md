# AlienplsBot
Discord bot to post links that please the alien
You can edit the previx in `config.json`
## Commands
(assuming *!* is the prefix)
- **`!alienpls`**: posts a random link from a list of link in `/data/links.json` as a reply to the message. Does not repost the same entry twice within an hour. Links with tags will be spoilered.
	- **`!alienpls *args`**: Posts a random link that will not be spoilered if all tags are covered by the arguments. The first argument being `*` will prevent any video from being spoilered.
- **`!add <link>`**: Adds an entry into `/data/links.json` with the link provided. No error checking yet on whether or not acceptable link.
	- **`!add <link> *args`**: Adds an entry but any arguments provided will be supplied as tags to the link.


Written in node.js