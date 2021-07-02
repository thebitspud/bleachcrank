import Client from "../client";
import { ClientEvents } from "discord.js";

type Run = {
  (client: Client, ...args: any[]): void;
};

export type Event = {
  name: keyof ClientEvents;
  run: Run;
};
