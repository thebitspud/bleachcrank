import { Event } from "../types";

export const event: Event = {
  name: "ready",
  run: (client) => {
    console.log(`${client.user?.tag} fired up and ready to serve.`);
  },
};
