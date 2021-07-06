import { Command } from "../types";
import { MessageEmbed } from "discord.js";
import moment from "moment";

export const command: Command = {
  name: "serverinfo",
  aliases: ["serverinformation", "server", "s", "si", "sinfo"],
  desc: "Returns the server's information card.",
  run: async (client, message, args) => {
    if (!client.user) return;

    const server = message.guild;
    if (!server) return;

    const members = server.members.cache;
    const channels = server.channels.cache;
    const emojis = server.emojis.cache;
    const roles = server.roles.cache;

    const iconUrl = server.iconURL()
      ? <string>server.iconURL()
      : "https://i.imgur.com/wSTFkRM.png";

    const exampleEmbed = new MessageEmbed()
      .setColor("#88ff88")
      .setTitle(server.name)
      .setDescription(server.id)
      .setThumbnail(iconUrl)
      .addFields(
        {
          name: "Owner",
          value: server.owner ? server.owner.user.tag : "Unknown",
        },
        {
          name: "Date Created",
          value: moment(server.createdTimestamp).format("MMMM Do YYYY"),
        },
        { name: "Members", value: server.memberCount, inline: true },
        {
          name: "Bots",
          value: members.filter((m) => m.user.bot).size,
          inline: true,
        },
        {
          name: "Humans",
          value: members.filter((m) => !m.user.bot).size,
          inline: true,
        },
        { name: "Roles", value: roles.size - 1, inline: true },
        { name: "Emojis", value: emojis.size, inline: true },
        {
          name: "Boosts",
          value: server.premiumSubscriptionCount,
          inline: true,
        },
        {
          name: "Text Channels",
          value: channels.filter((c) => c.type === "text").size,
          inline: true,
        },
        {
          name: "Voice Channels",
          value: channels.filter((c) => c.type === "voice").size,
          inline: true,
        },
        { name: "Region", value: server.region, inline: true }
      )
      .setTimestamp()
      .setFooter(
        `Data compiled by ${client.user.tag}`,
        <string>client.user.avatarURL()
      );

    await message.channel.send(exampleEmbed);
  },
};
