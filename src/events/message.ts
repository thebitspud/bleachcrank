import { Event, Command } from "../types";
import { Message, Util } from "discord.js";

export const event: Event = {
  name: "message",
  run: (client, message: Message) => {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!client.user || !message.mentions.has(client.user))
      if (!message.content.startsWith(client.config.prefix)) return;

    // Tidying up given command arguments
    let args = Util.cleanContent(message.content, message)
      .toLowerCase()
      .split(" ")
      .filter((arg) => arg.length && !arg.startsWith("@"));

    // Removing prefix from the command if necessary
    if (args[0]) {
      if (args[0].startsWith(client.config.prefix)) {
        args[0] = args[0].slice(client.config.prefix.length);
        if (!args[0].length) args.shift();
      }

      // Fixing unspaced reddit commands
      if (args[0].startsWith("r/") && args[0].length > 2) {
        args[0] = args[0].slice(2);
        args.unshift("r/");
      }
    }

    // Getting the command key, and returning an error if none exists
    let key = args.shift();
    if (!key) {
      message.channel.send(`${emptyError}\n${helpReminder}`).then();
      return;
    }

    console.log(`${message.author.tag}: --${key} ${args}`);

    // Retrieving and executing the command
    const command = client.commands.get(key) || client.aliases.get(key);
    if (command)
      try {
        (command as Command).run(client, message, args);
      } catch {
        console.log("Error: command execution failed");
      }
    else message.channel.send(`${invalidError}\n${helpReminder}`).then();
  },
};

const emptyError = "I cannot process empty requests.";
const invalidError = "I cannot help you with that.";
const helpReminder = "Type --help for a list of valid commands.";
