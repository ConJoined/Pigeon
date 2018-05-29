exports.run = (client) => {
  console.log(`Ready to server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
  client.user.setPresence({ game: { name: 'ppu!(command) | UNSTABLE BUILD 1005', type: 3 } , status: "dnd"});
}
