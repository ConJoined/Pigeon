
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const prefixes = ["pro pigeon unstable, ",  "ppu!", "@Pigeon Professional Unstable#1282 "];

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", message => {
  const lowercasemsg = message.content.toLowerCase();
  let prefix = false;
  const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
  prefix = prefixMention.toString().match(lowercasemsg) ? lowercasemsg.match(prefixMention)[0] + " " : prefix;
  if (message.author.bot) return;
  for(const thisPrefix of prefixes) {
    if(lowercasemsg.startsWith(thisPrefix)) prefix = thisPrefix;
  }
  if(!prefix) return;

  // This is the best way to define args. Trust me.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(Discord, client, message, args);
  } catch (err) {
    message.reply("That's... not a command. :(")
    console.error(err);
  }
});

client.login(process.env.heart);
