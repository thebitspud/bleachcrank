import { Command } from "../types";

export const command: Command = {
  name: "karthus",
  aliases: ["karth", "requiem"],
  desc: "Requiem",
  run: async (client, message, args) => {
    await message.channel.send(text);
  },
};

const text =
  "**Requiem**\n" +
  "*Effect Radius:* Global\n" +
  "*Cast Time:* 0.25\n" +
  "*Mana Cost:* 100\n" +
  "*Cooldown:* 200 / 180 / 160\n" +
  "\n" +
  "**Active**: Karthus recites Quran for 3 seconds then deals حلال damage to all targetable enemy champions upon its " +
  "completion.\n" +
  "\n" +
  "*Damage:* 200 / 350 / 500 (+75% AP)";
