import { Command } from "../types";
import { getIndexOrRandom } from "../scripts/random";
const fetch = require("node-fetch");

export const command: Command = {
  name: "comedynecro",
  aliases: [
    "r/comedynecrophilia",
    "comedynecrophilia",
    "necrophilia",
    "necro",
    "comedy",
    "cn",
    "funny",
    "humor",
  ],
  desc: "Fetches an image meme from r/comedynecrophilia.",
  run: async (client, message, args) => {
    await message.channel.send(getIndexOrRandom(posts, args));
  },
};

const url =
  "https://www.reddit.com/r/ComedyNecrophilia/top.json?limit=100&t=all";

let posts: string[];

export async function setPosts() {
  posts = await fetch(url)
    .then((res: Response) => res.json())
    .then((json: any) => json.data.children.map((e: any) => e.data.url));
}
