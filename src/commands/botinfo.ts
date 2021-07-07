import { Command } from "../types";
import { MessageEmbed } from "discord.js";
import PackageJSON from "../../package.json";
import ConfigJSON from "../config.json";

export const command: Command = {
  name: "botinfo",
  aliases: [
    "botinformation",
    "bot",
    "b",
    "bi",
    "binfo",
    "bleachcrank",
    "about",
  ],
  desc: "Returns the bot's information card.",
  run: async (client, message, args) => {
    if (!client.user) return;

    const iconUrl = client.user.avatarURL()
      ? <string>client.user.avatarURL()
      : "https://i.imgur.com/wSTFkRM.png";

    const embed = new MessageEmbed()
      .setColor("#ffff88")
      .setTitle(client.user.tag)
      .setDescription(client.user.id)
      .setURL("https://github.com/thebitspud/bleachcrank")
      .setThumbnail(iconUrl)
      .addFields(
        { name: "Creator", value: "intonomist#9642" },
        {
          name: "Version",
          value: `${PackageJSON.version} [July 7th 2021]`,
        },
        {
          name: "Made With",
          value: "Discord.js + Typescript",
        },
        { name: "Prefix", value: ConfigJSON.prefix, inline: true },
        { name: "Commands", value: client.totalCommands, inline: true },
        {
          name: "Servers",
          value: client.guilds.cache.size,
          inline: true,
        }
      )
      .setTimestamp()
      .setFooter(`Data compiled by ${client.user.tag}`, iconUrl);

    await message.channel.send(embed);
  },
};
