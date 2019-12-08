import Discord from "discord.js";

import { me, server } from "./util/commands";
import { PREFIX, TOKEN } from "./util/secrets";

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", message => {
  if (message.content.startsWith(`${PREFIX}server`)) {
    message.channel.send(server(message));
  } else if (message.content.startsWith(`${PREFIX}me`)) {
    message.channel.send(me(message));
  }
});

client.login(TOKEN);
