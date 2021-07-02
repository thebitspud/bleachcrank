import { Command } from "../types";
import { getRandom } from "../scripts/random";

export const command: Command = {
  name: "advice",
  aliases: ["a", "adv", "tip"],
  desc: "Gives advice on demand.",
  run: async (client, message, args) => {
    await message.channel.send(getRandom(advice));
  },
};

const advice = ["Whatever you do, do not search up scientific pig name."];
