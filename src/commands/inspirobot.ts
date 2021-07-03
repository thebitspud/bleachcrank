import { Command } from "../types";
const fetch = require("node-fetch");

export const command: Command = {
  name: "inspirobot",
  aliases: ["i", "inspire", "inspireme", "inspiration", "inspiro"],
  desc: "Generates and displays an Inspirobot image.",
  run: async (client, message, args) => {
    fetch(url)
      .then((res: Response) => res.text())
      .then((text: string) => message.channel.send(text));
  },
};

const url = "https://inspirobot.me/api?generate=true";
