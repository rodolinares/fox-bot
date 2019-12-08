import Discord from "discord.js";
import { TOKEN } from "./util/secrets";

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.login(TOKEN);
