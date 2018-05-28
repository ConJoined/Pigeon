  var now = (function () {
    var year = new Date(new Date().getFullYear().toString()).getTime();
    return function () {
        return Date.now() - year
    }
})();
function clean(text) {
    if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
    return text;
};
exports.run = (Discord,client, message, args) => {
  if (message.channel.type === "dm") { // Kill switch for if the message is in DMs
        message.reply("You can't use this command in DMs.")
        return;
      }
      const argumentals = args.join(" ");
      const lowerargumentals = argumentals.toLowerCase();
      if (lowerargumentals === "me a beach ball") {
        message.reply("Here you go! <a:BouncingBeachBall:449383018793271307>");
      } else if (lowerargumentals === "me a mac wait cursor") {
        message.reply("Spinning beach ball of doom... Well, can't stop ya. <a:BeachBall:449382607185117184>");
      } else if (lowerargumentals === "me a finobe") {
        message.reply("Here's your Finobe! https://finobe.com");
      } else if (lowerargumentals === "me finobe") {
        message.reply("Here's your Finobe! https://finobe.com");
      } else if (lowerargumentals === "me help") {
        message.reply("Oh no! Some help is on it's way! 🚑");
        const HelpEmbed = new  Discord.RichEmbed()
        .setTitle("Your Help 🚑")
        .setDescription("Hey! I've got your help! To request me, say pu! in any spelling! (BETA)")
        .setURL("https://discordapp.com")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
        .setColor(316268)
        .setThumbnail("https://cdn.discordapp.com/avatars/442358815690588200/0a89ae8f11cbaac2a3223b9531ef9ec9.png?size=256")
        .addField("Fun", "Pigeon, give me [blank]\nDescription:\nGives you stuff\nThings to request:\nFinobe, Beach Ball, \nMac Wait Cursor,\nHelp\n ", true)
        .addField("Informational", "Pigeon, give me help \nAlias: Pigeon, give me some help\nDescription:\nGives you help.\n ", true)
        .addBlankField(true)
        .addField("NSFW", "To see NSFW commands, type pu!nsfw help in a NSFW channel")
        .setTimestamp();
        message.author.send("Transporting help to your place...");
        message.author.send({embed: HelpEmbed});
      } else if (lowerargumentals === "me some help") {
        message.reply("Oh no! Some help is on it's way! 🚑");
        const HelpEmbed = new  Discord.RichEmbed()
        .setTitle("Your Help 🚑")
        .setDescription("Hey! I've got your help! To request me, say pu! in any spelling! (BETA)")
        .setURL("https://discordapp.com")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
        .setColor(316268)
        .setThumbnail("https://cdn.discordapp.com/avatars/442358815690588200/0a89ae8f11cbaac2a3223b9531ef9ec9.png?size=256")
        .addField("Fun", "Pigeon, give me [blank]\nDescription:\nGives you stuff\nThings to request:\nFinobe, Beach Ball, \nMac Wait Cursor,\nHelp\n ", true)
        .addField("Informational", "Pigeon, give me help \nAlias: Pigeon, give me some help\nDescription:\nGives you help.\n ", true)
        .addBlankField(true)
        .addField("NSFW", "To see NSFW commands, type pu!nsfw help in a NSFW channel")
        .setTimestamp();
        message.author.send("Transporting help to your place...");
        message.author.send({embed: HelpEmbed});
      } else {
        message.reply("I cannot give that to you, sorry :(");
      }
}
