import { Event } from "../types";

export const event: Event = {
  name: "ready",
  run: (client) => {
    console.log(
      `${
        client.user ? client.user.tag : "Bleachcrank"
      } fired up and ready to serve.`
    );
  },
};
