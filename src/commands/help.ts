import { Command } from "../types";

export const command: Command = {
  name: "help",
  aliases: ["h"],
  desc: "Returns a list of valid commands.",
  run: async (client, message, args) => {
    await message.channel.send(help.toString().replace(/,/g, "\n"));
  },
};

export const help: string[] = [];
