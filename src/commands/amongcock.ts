import { Command } from "../types";
import { getIndexOrRandom } from "../scripts/random";

export const command: Command = {
  name: "amongcock",
  aliases: [
    "amonguscock",
    "amonguscockbot",
    "u/amonguscockbot",
    "amongus",
    "among",
    "amoguscockbot",
    "amoguscock",
    "amogus",
    "cock",
    "8",
  ],
  desc: "Sends an among us cock :flushed:",
  run: async (client, message, args) => {
    await message.channel.send(getIndexOrRandom(text, args));
  },
};

const text = [
  "⠀⠀⠀⠀⠀⢀⣴⡾⠿⠿⠿⠿⠿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⢠⣿⠁⠀⠀⠀⣀⣤⣶⣶⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⣾⡇⠀⠀⣴⣿⡟⠉⠀⠀⠀⠀⠙⢿⡄⠀⠀⠀⠀⠀⠀⠀\n" +
    "⢀⣤⣴⣿⣿⠀⠀⢸⣿⡇⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀\n" +
    "⣼⡏⠀⢸⣿⠀⠀⠀⢿⣿⣤⣀⠀⠀⠀⠀⣀⣴⣿⠀⠀⠀⠀⠀⠀⠀\n" +
    "⣿⡇⠀⢸⣿⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⠿⢻⡇⠀⠀⠀⠀⠀⠀⠀\n" +
    "⣿⡇⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣶⣿⣷⣶⣤⡀⠀⠀\n" +
    "⣿⡇⠀⢸⣿⠀⠀⠀⠀⠀⠀⣀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀\n" +
    "⢻⡇⠀⢸⣿⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⡿⠿⣿⣿⣿⣿⡇\n" +
    "⠈⠻⠶⣿⣿⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⢸⣿⣿⣿⣿\n" +
    "⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⢸⣿⣿⣿⣿\n" +
    "⠀⠀⠀⠀⢿⣧⣀⣠⣴⡿⠙⠛⠿⠿⠿⠿⠉⠀⠀⠀⢠⣿⣿⣿⣿⠇\n" +
    "⠀⠀⠀⠀⠀⢈⣩⣭⣥⣤⣤⣤⣤⣭⣭⣤⣤⣤⣶⣿⣿⣿⣿⣿⠏⠀\n" +
    "⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀\n" +
    "⠀⠀⠀⢸⣿⣿⣿⡟⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠋⠁⠀⠀⠀⠀\n" +
    "⠀⠀⠀⢸⣿⣿⣿⣷⣄⣀⣀⣀⣀⣀⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⠈⠛⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀\n" +
    "⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⢀⣹⣿⣿⣿⣿⡇⠀⠀\n" +
    "⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀\n" +
    "⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠁⠀⠀⠀\n" +
    "⠀⠀⠀⠀⣿⣿⣿⣿⠁⠀⠀⠀⠉⠉⠉⠉⠁⢠⣤⣤⣤⣤⣤⣤⡀\n" +
    "⠀⠀⠀⠀⢿⣿⣿⣿⣷⣶⣶⣶⣶⣾⣿⣿⣿⣆⢻⣿⣿⣿⣿⣿⡇\n" +
    "⠀⠀⠀⠀⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⢻⣿⣿⣿⡿⠁\n" +
    "⠀⠀⠀⠀⠀⠀⠈⠙⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠉⠁⠙⠛⠉⠀⠀",

  "⠀⠀⠀⠀⠀⢀⣴⡾⠿⠿⠿⠿⠿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⢠⣿⠁⠀⠀⠀⣀⣤⣶⣶⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⣾⡇⠀⠀⣴⣿⡟⠉⠀⠀⠀⠀⠙⢿⡄⠀⠀⠀⠀⠀⠀⠀\n" +
    "⢀⣤⣴⣿⣿⠀⠀⢸⣿⡇⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀\n" +
    "⣼⡏⠀⢸⣿⠀⠀⠀⢿⣿⣤⡀⠀⠀⠀⠀⣀⣴⣿⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀\n" +
    "⣿⡇⠀⢸⣿⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⠿⣿⡇⠀⠀⠀⠀⢴⣶⣿⣿⣿⣿⡄\n" +
    "⣿⡇⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⣀⣠⣴⣾⣷⣝⢿⣿⣿⣿\n" +
    "⣿⡇⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⠉⠁\n" +
    "⢻⡇⠀⢸⣿⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠉\n" +
    "⠈⠻⠷⣿⣿⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏\n" +
    "⠀⠀⠀⠀⣿⡇⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇\n" +
    "⠀⠀⠀⠀⢿⣧⣀⣠⣴⡿⠙⠛⣿⣿⣿⣿⡿⢿⣿⡿⠋\n" +
    "⠀⠀⠀⠀⠀⠈⠉⠉⠁⠀⠀⠀⠀⠀⠉⠉",

  "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n" +
    "⣿⣿⣿⠟⢹⣶⣶⣝⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n" +
    "⣿⣿⡟⢰⡌⠿⢿⣿⡾⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n" +
    "⣿⣿⣿⢸⣿⣤⣒⣶⣾⣳⡻⣿⣿⣿⣿⡿⢛⣭⣭⣭⣭⣭⣭⡻⣿⣿⣿⣿\n" +
    "⣿⣿⣿⣿⢸⣿⣿⣿⣿⢿⡇⣶⡽⣿⠟⣡⡾⣛⣭⣭⣭⣛⡻⣿⣷⡽⣿⣿\n" +
    "⣿⣿⣿⣿⠸⣿⣿⣿⣿⢇⠃⣟⣷⠃⢸⡇⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣽⣿\n" +
    "⣿⣿⣿⣿⣇⢻⣿⣿⣯⣕⠧⢿⢿⣇⢿⣷⣭⣛⣛⣛⣛⣛⣫⣾⣿⣿⡇⣿\n" +
    "⣿⣿⣿⣿⣿⣌⢿⣿⣿⣿⣿⡘⣞⣿⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿\n" +
    "⣿⣿⣿⣿⣿⣿⣦⠻⠿⣿⣿⣷⠈⢞⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿\n" +
    "⣿⣿⣿⣿⣿⣿⣿⣗⠄⢿⣿⣿⡆⡈⣽⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻⣿\n" +
    "⣿⣿⣿⣿⣿⡿⣻⣽⣿⣆⠹⣿⡇⠁⣿⡼⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣾⣿\n" +
    "⣿⣿⠿⣛⣽⣾⣿⣿⠿⠋⠄⢻⣷⣾⣿⣧⠟⣡⣾⣿⣿⣿⣿⣿⣿⡇⣿⣿\n" +
    "⣿⢼⡟⢿⣿⡿⠋⠁⣀⡀⠄⠘⠊⣨⣽⠁⠰⣿⣿⣿⣿⣿⣿⣿⡍⠗⣿⣿\n" +
    "⣿⡼⣿⠄⠄⠄⠄⣼⣿⡗⢠⣶⣿⣿⡇⠄⠄⣿⣿⣿⣿⣿⣿⣿⣇⢠⣿⣿\n" +
    "⣿⣷⣝⠄⠄⢀⠄⢻⡟⠄⣿⣿⣿⣿⠃⠄⠄⢹⣿⣿⣿⣿⣿⣿⣿⢹⣿⣿\n" +
    "⣿⣿⣿⣿⣿⣿⣧⣄⣁⡀⠙⢿⡿⠋⠄⣸⡆⠄⠻⣿⡿⠟⢛⣩⣝⣚⣿⣿\n" +
    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣤⣤⣤⣾⣿⣿⣄⠄⠄⠄⣴⣿⣿⣿⣇⣿⣿\n" +
    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⡀⠛⠿⣿⣫⣾⣿⣿\n" +
    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
];
