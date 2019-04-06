const { Client, RichEmbed } = require('discord.js');
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    client.user.setActivity("over this server.", {type: "WATCHING"})
})

// EMBEDDED
client.on('message', message => {
// INTRO	
	if (message.content === '.sns help')
	{
    message.channel.send({embed:
	{
    color: 0x8f20e7,
    title: "SUPERNOOBS BOT (Beta)",
    description: "So excited to have you test out my bot! Here are the current commands that you can try out (more coming soon!): ",
	fields: [{
        name: "1. .sns discord",
        value: "Generate a permanent discord server link."
      },
      {
        name: "2. .sns join",
        value: "SuperNoobs membership form link."
      },
      {
        name: "3. .sns yt",
        value: "The official YouTube channel of SuperNoobs."
      },
	  {
        name: "4. .sns steam",
        value: "The official Steam group of SuperNoobs."
      },
      {
        name: "5. .sns",
        value: "A brief intro about out clan, SuperNoobs."
      },	
	  {
        name: "6. bhai bhai",
        value: "The BHAI-BHAI command."
      },
      {
        name: "Additional auto-respond triggers:",
        value: "oof, damn, hi, accept it, bhai bhai"
      },	  
    ],
	thumbnail: { url: "https://cdn.discordapp.com/attachments/486959409059069967/559980546839674891/SUPERNOOBS.png" },
	footer:
		{
		icon_url: "https://cdn.discordapp.com/attachments/486959409059069967/559994605718863883/AGFX_Emoji.png",
		text: "Created by AGFX - 2019",
		}
	}
	});
  }
// SNS COMMANDS
  if (message.content === 'bhai bhai')
  {
	const embed = new Discord.RichEmbed()
	.setTitle("BHAI BHAI!")
	.setDescription(message.author.toString() + " is bhai :heart:")
	.setColor(0x8f20e7)
	.setThumbnail(message.author.avatarURL);
 
  message.channel.send({embed});
  }
  if (message.content === 'Bhai bhai')
  {
	const embed = new Discord.RichEmbed()
	.setTitle("BHAI BHAI!")
	.setDescription(message.author.toString() + " is bhai :heart:")
	.setColor(0x8f20e7)
	.setThumbnail(message.author.avatarURL);
 
  message.channel.send({embed});
  }
  if (message.content === '.sns discord')
  {
    message.channel.send({embed: 
	{
    color: 0x8f20e7,
    title: "SuperNoobs Discord",
    description: "https://discord.gg/kt6ZZ5r",
	thumbnail: { url: "https://cdn.discordapp.com/attachments/486959409059069967/559980546839674891/SUPERNOOBS.png" },
	}
	});
  }
  if (message.content === '.sns join')
  {

    message.channel.send({embed:
	{
    color: 0x8f20e7,
    title: "SuperNoobs Joining Form",
    description: "https://goo.gl/forms/IAVpBmQpooCPr0Hx1",
	thumbnail: { url: "https://cdn.discordapp.com/attachments/486959409059069967/559980546839674891/SUPERNOOBS.png" },
	}
	});
  }
  if (message.content === '.sns yt')
  {
    message.channel.send({embed: 
	{
    color: 0x8f20e7,
    title: "SuperNoobs YouTube",
    description: "https://www.youtube.com/channel/UCY73iNKaCbwaPzFKDLX0-lw",
	thumbnail: { url: "https://cdn.discordapp.com/attachments/486959409059069967/559980546839674891/SUPERNOOBS.png" },
	}
	});
  }
  if (message.content === '.sns steam')
  {
    message.channel.send({embed: 
	{
    color: 0x8f20e7,
    title: "SuperNoobs Steam Group",
    description: "https://steamcommunity.com/groups/sns-global",
	thumbnail: { url: "https://cdn.discordapp.com/attachments/486959409059069967/559980546839674891/SUPERNOOBS.png" },
	}
	});
  }
  if (message.content === '.sns')
  {
    message.channel.send({embed: 
	{
    color: 0x8f20e7,
    title: "SuperNoobs",
    description: "SUPERNOOBS is a global community of casual, social as well as competitive gamers.\n Chill around, have fun, make new friends, chat with fellow gamers and participate in game sessions.\n Games we play - CSGO, Rainbow Six Siege, Apex Legends, MCVS, Paladins, PUBG etc.",
	image: { url: "https://cdn.discordapp.com/attachments/486962411329552385/556082541443022849/SUPERNOOBS.png" },
	footer:
		{
		icon_url: "https://cdn.discordapp.com/attachments/486959409059069967/559994605718863883/AGFX_Emoji.png",
		text: "Created by AGFX - 2019",
		}
	}
	});
  }

});


// AUTO-RESPONSES
client.on('message', (receivedMessage) => {
	if (receivedMessage.content === 'oof') {
        receivedMessage.channel.send("Unmature beings!")
	}
	if (receivedMessage.content === 'damn') {
        receivedMessage.channel.send("Wot a fag!")
	}
	if (receivedMessage.content === 'accept it') {
        receivedMessage.channel.send("We noob.")
	}
	if (receivedMessage.content === 'hi') {
        receivedMessage.channel.send("Hi! My name is Chr... we don't say that here anymore.")
	}
// NEW
	if (receivedMessage.content.includes('u suck')) {
        receivedMessage.channel.send("no u")
	}
	if (receivedMessage.content.includes('good morning')) {
        receivedMessage.channel.send("Morning folks!")
	}
	if (receivedMessage.content.includes('good evening')) {
        receivedMessage.channel.send("Good evening!")
	}
	if (receivedMessage.content.includes('good night')) {
        receivedMessage.channel.send("Night night, mate!")
	}
	if (receivedMessage.content.includes('call me')) {
        receivedMessage.channel.send("cAlL mE gOD")
	}
	if (receivedMessage.content.includes('i am g0d')) {
        receivedMessage.channel.send("i aM gOD")
	}
	if (receivedMessage.content.includes('i am god')) {
        receivedMessage.channel.send("i aM gOD")
	}
	if (receivedMessage.content.includes(client.user.toString())) {
        receivedMessage.channel.send(receivedMessage.author.toString() + " Yo! What can I do for you? Type in .sns help to get started.")
    	}
})


client.login(process.env.BOT_TOKEN)
