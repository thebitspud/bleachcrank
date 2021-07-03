import Client from "./client";
import ConfigJSON from "./config.json";
import { setPosts } from "./commands/comedynecro";

const bot = new Client();

bot.init().then();
setPosts().then();

bot.on("ready", () => {
  bot.user?.setActivity(`${ConfigJSON.prefix}help`, { type: "PLAYING" });
});
