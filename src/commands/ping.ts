import { Command } from "../types";

export const command: Command = {
  name: "ping",
  aliases: ["p"],
  desc: "Returns the bot's ping.",
  run: async (client, message, args) => {
    await message.channel.send(`Pong! Response time: ${client.ws.ping} ms`);
  },
};
