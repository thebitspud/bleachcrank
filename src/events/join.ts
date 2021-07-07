import { Event } from "../types";
import { Guild } from "discord.js";

export const event: Event = {
  name: "guildCreate",
  run: (client, guild: Guild) => {
    console.log(`${client.user?.tag} added to ${guild.name}`);
  },
};
