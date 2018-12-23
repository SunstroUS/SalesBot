const Discord = require('discord.js');

const config = require("./config/config.json");
const tConfig = require("./config/tConfig.json");

const client = new Discord.Client(); 

client.on("ready", () =>  {
  console.log('Turned on')
})

client.on("message", message => {
  // Take message and store into array
  var words = message.content.trim().split(/ +/g);
  // Make sure message starts with a /command and that it's in a DM
  if (!words[0].startsWith("/") || message.channel.type != 'dm') return;
  // Remove command
  var content = words.shift().toLowerCase()
  console.log("-------------------------")

  if(content.startsWith("/sales")) {
    console.log("Convo init")
    
    message.channel.send("Hello! What can i help you sell today?")
  }

  if(content.startsWith("/product")) {
    console.log("Sale starting")
    console.log(words)

    message.channel.send(`Okay i'm looking up pricing for that`)

  }
})

client.login(tConfig.BotToken);