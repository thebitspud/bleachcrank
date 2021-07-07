import { Client, Collection } from "discord.js";
import path from "path";
import { readdirSync } from "fs";
import { Command, Config, Event } from "../types";
import ConfigJSON from "../config.json";
import { help } from "../commands/help";

class ExtendedClient extends Client {
  public commands: Collection<string, Command> = new Collection();
  public events: Collection<string, Event> = new Collection();
  public config: Config = ConfigJSON;
  public aliases: Collection<string, Command> = new Collection();
  public totalCommands = 0;

  public async init() {
    await this.login(this.config.token);

    /* Commands */
    const commandPath = path.join(__dirname, "..", "commands");
    this.totalCommands = readdirSync(commandPath).length;

    for (const file of readdirSync(commandPath)) {
      const { command } = require(`${commandPath}/${file}`);
      this.commands.set(command.name, command);

      if (command.aliases?.length) {
        command.aliases.forEach((alias: string) => {
          this.aliases.set(alias, command);
        });
      }
    }

    this.commands.forEach((value, key) => {
      help.push(`--${key}: ${value.desc}`);
    });

    /* Events */
    const eventPath = path.join(__dirname, "..", "events");
    for (const file of readdirSync(eventPath)) {
      const { event } = await import(`${eventPath}/${file}`);
      this.events.set(event.name, event);
      this.on(event.name, event.run.bind(null, this));
    }
  }
}

export default ExtendedClient;
