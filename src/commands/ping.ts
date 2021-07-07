import { Command } from "../types";

export const command: Command = {
  name: "ping",
  aliases: ["p", "latency"],
  desc: "Returns the bot's ping.",
  run: async (client, message, args) => {
    const userPing = `Response time: ${client.ws.ping} ms`;

    if (args.length) {
      if (args[0] === "cock" || args[0] === "c" || args[0] === "nice") {
        await message.channel.send(altText + userPing);
        return;
      }
    }

    await message.channel.send(
      (Math.random() > 0.95 ? altText : "Pong! ") + userPing
    );
  },
};

const altText =
  "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n" +
  "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⢿⣿⣿⠿⠛⠿⣿⣿⣿⣿\n" +
  "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠉⠄⣀⡤⢤⣤⣈⠁⣠⡔⠶⣾⣿⣿\n" +
  "⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠋⠁⠄⠄⠄⣼⣿⠁⡀⢹⣿⣷⢹⡇⠄⠎⣿⣿\n" +
  "⣿⣿⣿⣿⠿⠛⠉⠁⠄⠄⠄⠄⠄⠄⠄⠹⣇⣀⣡⣾⣿⡿⠉⠛⠒⠒⠋⣿\n" +
  "⣿⡿⠋⠁⠄⠄⢀⣤⣤⡀⠄⠄⠄⠄⠄⠄⠈⠙⠛⠛⠉⠄⠄⠄⠄⠄⠄⣿\n" +
  "⣿⠄⠄⠄⠄⠄⢹⣧⡈⠿⣷⣄⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣠⣿\n" +
  "⣿⠄⠄⠄⠄⠄⠈⠻⢿⣶⣌⣙⡛⠛⠿⠶⠶⠶⠶⠶⠖⣒⣒⣚⣋⡩⢱⣿\n" +
  "⣿⠄⠄⠄⠄⠄⠄⠄⠄⠈⠉⠛⠛⠛⠻⠿⠿⠟⠛⠛⠛⠉⢉⣥⣶⣾⣿⣿\n" +
  "⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠒⠶⣿⣿⣿⣿⣿⣿⣿\n" +
  "⣿⡟⠛⢻⣿⡟⠛⣿⡟⠛⠛⠛⠛⢻⣿⡿⠛⠛⠛⢻⡟⠛⠛⠛⠛⢻⣿⣿\n" +
  "⣿⡇⠄⠄⢻⡇⠄⣿⣿⣿⠄⠄⣿⣿⡏⠄⣼⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿\n" +
  "⣿⡇⠄⣧⠄⠄⠄⣿⣿⣿⠄⠄⣿⣿⡇⠄⣿⣿⣿⣿⡇⠄⣥⣥⣥⣿⣿⣿\n" +
  "⣿⡇⠄⣿⣧⠄⠄⣿⡟⠛⠄⠄⠛⢻⣷⣄⠈⠙⠛⢹⡇⠄⠉⠉⠉⢹⣿⣿\n" +
  "⣿⣿⡿⠛⠛⠛⢻⣿⠿⠛⠛⠛⢿⣿⣿⡿⠛⠛⠛⢻⡟⠛⣿⡿⠛⣻⣿⣿\n" +
  "⣿⡟⠄⣼⣿⣿⣿⡇⠄⣾⣿⣧⠄⢻⡏⠄⣼⣿⣿⣿⡇⠄⡟⢀⣴⣿⣿⣿\n" +
  "⣿⡇⠄⣿⣿⣿⣿⡄⠄⣿⣿⣿⠄⢸⡇⠄⣿⣿⣿⣿⡇⠄⣀⠈⢻⣿⣿⣿\n" +
  "⣿⣿⣄⠈⠙⠛⢻⣧⡄⠙⠛⠉⣠⣿⣷⣄⠈⠙⠛⢹⡇⠄⣿⣧⠄⠻⣿⣿\n" +
  "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n\n";
