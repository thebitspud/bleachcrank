import Client from "./client";
import ConfigJSON from "./config.json";

const bot = new Client();
bot.init();
bot.on("ready", () => {
  bot.user?.setActivity(`${ConfigJSON.prefix}help`, { type: "PLAYING" });
});
