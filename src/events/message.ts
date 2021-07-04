import { Event, Command } from "../types";
import { Message, Util } from "discord.js";

export const event: Event = {
  name: "message",
  run: (client, message: Message) => {
    if (message.author.bot) return;
    if (!message.guild) return;

    let args;
    if (client.user && message.mentions.has(client.user)) {
      args = Util.cleanContent(message.content, message)
        .toLowerCase()
        .trim()
        .split(" ")
        .filter((arg) => arg.length > 0 && !arg.startsWith("@"));

      // Quick fix for removing prefix if bot is pinged
      if (args[0] && args[0].startsWith(client.config.prefix))
        args[0] = args[0].slice(client.config.prefix.length);
    } else if (message.content.startsWith(client.config.prefix)) {
      args = message.content
        .slice(client.config.prefix.length)
        .toLowerCase()
        .trim()
        .split(" ")
        .filter((arg) => arg.length > 0);
    } else return;

    let key = args.shift();
    if (!key)
      return message.channel
        .send(
          "I cannot process empty requests.\nType --help for a list of valid commands."
        )
        .then();

    console.log(message.author.tag + ": " + args);

    const command = client.commands.get(key) || client.aliases.get(key);
    if (command) (command as Command).run(client, message, args);
    else
      message.channel
        .send(
          "I cannot help you with that.\nType --help for a list of valid commands."
        )
        .then();
  },
};
