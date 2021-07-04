import Client from "./client";
import ConfigJSON from "./config.json";
import { setPosts } from "./commands/comedynecro";

const client = new Client();

client.init().then();
setPosts().then();

client.on("ready", () => {
  if (client.user)
    client.user
      .setActivity(`${ConfigJSON.prefix}help`, { type: "PLAYING" })
      .then();
});
