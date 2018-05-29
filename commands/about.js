exports.run = (Discord, client, message, args) => {
   const HelpEmbed = new  Discord.RichEmbed()
        .setTitle("About Pigeon Professional")
        .setDescription("Information on the bot. This command is exclusive to Pigeon Professional.")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
        .setColor([135, 21, 153])
        .setThumbnail("https://cdn.discordapp.com/avatars/450288720151707658/81a8e401f8e4f58292de9de35f85bf18.png?size=256")

        .addField("Build", "1006", true)
        .addField("Build Changes", "- Multiple prefixes (ppu!, pro pigeon unstable, ping)", true)
        .addField("Version", "Professional Unstable", true)
        .addField("Server Count", client.guilds.size.toString(), true)
        .addField("Servers Inside", client.guilds.map(g => g.name).join("\n"), true)
        .addField("How to Get", "Invite Only", true)
        .addBlankField(true)
        .addField("Owner", "ConJoined#2400", true)
        .addField("Contributors", "muhammed51#5559, ConJoined#2400", true)
        .setTimestamp();
   message.reply({ embed: HelpEmbed })
}
