import { Event, Command } from "../types";
import { Message } from "discord.js";

export const event: Event = {
  name: "message",
  run: (client, message: Message) => {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(client.config.prefix)) return;

    const args = message.content
      .slice(client.config.prefix.length)
      .trim()
      .split(" ");

    const key = args.shift()?.toLowerCase();
    if (!key) return;

    const command = client.commands.get(key) || client.aliases.get(key);
    if (command) (command as Command).run(client, message, args);
  },
};
