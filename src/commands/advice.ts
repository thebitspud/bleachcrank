import { Command } from "../types";
import { getIndexOrRandom } from "../scripts/random";

export const command: Command = {
  name: "advice",
  aliases: ["a", "adv", "tip"],
  desc: "Gives advice on demand.",
  run: async (client, message, args) => {
    await message.channel.send(getIndexOrRandom(advice, args));
  },
};

const advice = [
  "Whatever you do, do not search up scientific pig name.",
  "In 2077 what makes someone a criminal? Getting cock.",
  "If you don't know what you're doing, then how can the enemy?",
  "We live in a society\n\nBottom text",
  "There are accidents.",
  "Say amogus backwards and add balls at the end :sunglasses:",
];
