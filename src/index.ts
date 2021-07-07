import Client from "./client";
import ConfigJSON from "./config.json";
import { setPosts as setCNPosts } from "./commands/comedynecro";

const client = new Client();

client.init().then();
setCNPosts().then();

client.on("ready", () => {
  client.user
    ?.setActivity(`${ConfigJSON.prefix}help`, { type: "PLAYING" })
    .then();
});
