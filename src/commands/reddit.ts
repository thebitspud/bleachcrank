import { Command } from "../types";
import { getIndexOrRandom } from "../scripts/random";
const fetch = require("node-fetch");

export const command: Command = {
  name: "reddit",
  aliases: ["r", "r/"],
  desc: "Fetches a random post from the specified subreddit.",
  run: async (client, message, args) => {
    // Handling invalid request formats
    if (!args[0]) return message.channel.send(noArgsError);
    if (args[0].endsWith("/")) args[0].slice(0, -1);

    const fetchTest = await fetch(urlTest(args[0])).then((res: Response) =>
      res.json()
    );

    // Checking to ensure the requested subreddit is valid and can be queried
    if (fetchTest.message || !fetchTest.data.children.length)
      return message.channel.send(invalidSubError);

    // Sending a message containing the received post
    const posts = await fetch(url(args[0]))
      .then((res: Response) => res.json())
      .then((json: any) => json.data.children.map((e: any) => e.data.url));

    await message.channel.send(getIndexOrRandom(posts, args));
  },
};

function url(sub: string) {
  return `https://www.reddit.com/r/${sub}/top.json?limit=50&t=week`;
}

function urlTest(sub: string) {
  return `https://www.reddit.com/r/${sub}/top.json?limit=1&t=week`;
}

const invalidSubError = "I could not find that subreddit.";

const noArgsError =
  "This command requires at least one argument.\n" +
  "Proper usage: --reddit [subreddit]";
