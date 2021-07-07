import { Command } from "../types";
import { getRandom } from "../scripts/random";

export const command: Command = {
  name: "jax",
  aliases: ["jack", "jacks", "jacques"],
  desc: "HNNNNGRGGG JAX GROW",
  run: async (client, message, args) => {
    if (args.length) {
      switch (args[0]) {
        case "e":
          await message.channel.send(text[0]);
          return;
        case "r":
        case "ult":
        case "ultimate":
          await message.channel.send(text[1]);
          return;
      }
    }

    await message.channel.send(getRandom(text));
  },
};

const text = [
  "**ACTIVE**: Jax enters *Evasion*, a defensive stance, for 2 seconds, causing all non-turret basic attacks against " +
    "him to be dodged. Jax also takes 25% reduced damage from all champion area of effect abilities. *Counter Strike* " +
    "can be recast after 1 second, and does so automatically after the duration.\n" +
    "\n" +
    "At the end of the duration, Jax stuns all nearby enemies for 1 second and deals physical damage to them, increased " +
    "by 20% for each attack dodged, up to a 100% increase.",

  "**ACTIVE**: Jax makes a call to prayer that is heard globally, regardless of whether enemies have vision of him. " +
    "After a 1 second delay, he lays down a prayer mat and and enters a state of *Holy Worship* for 20 seconds, turning " +
    "to face his own Nexus for the duration. While *Holy Worship* is active, Jax and all surrounding allies are granted " +
    "invulnerability and regenerate 5% max health per second. During this period all minions stop fighting, and all " +
    "champions are silenced and disarmed (these effects cannot be reduced by tenacity or cleansed by any means)." +
    "\n\n" +
    "At the end of the prayer, Jax gains 50% bonus movement speed while moving towards nearby visible enemy champions " +
    "and structures. This effect lasts until death or contact with an enemy champion or structure, upon which Jax " +
    "explodes, destroying all structures and executing all champions within 1000 units of him.",
];
