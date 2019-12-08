import dotenv from "dotenv";
import fs from "fs";

import logger from "./logger";

if (fs.existsSync(".env")) {
  logger.debug("Using .env file to supply config environment variables");
  dotenv.config({ path: ".env" });
} else {
  logger.debug("Using .env.example file to supply config environment variables");
  dotenv.config({ path: ".env.example" }); // you can delete this after you create your own .env file!
}

export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === "production"; // Anything else is treated as 'dev'

export const PREFIX = process.env["PREFIX"];

if (PREFIX) {
  console.log(`PREFIX is set to '${PREFIX}'`);
} else {
  console.log("No PREFIX. Set PREFIX environment variable");
  logger.error("No PREFIX. Set PREFIX environment variable");
}

export const TOKEN = process.env["TOKEN"];

if (!TOKEN) {
  console.log("No TOKEN. Set TOKEN environment variable");
  logger.error("No TOKEN. Set TOKEN environment variable");
  process.exit(1);
}
