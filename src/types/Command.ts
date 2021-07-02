import Client from "../client";
import { Message } from "discord.js";

type Run = {
  (client: Client, message: Message, args: string[]): void;
};

export type Command = {
  name: string;
  aliases: string[];
  desc: string;
  run: Run;
};
