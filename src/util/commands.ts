import { Message } from "discord.js";

export const server = (message: Message) => {
  return (
    `**Name**: ${message.guild.name}` +
    `\n**Member Count**: ${message.guild.memberCount}` +
    `\n**Created At**: ${message.guild.createdAt}` +
    `\n**Region**: ${message.guild.region}`
  );
};

export const me = (message: Message) => {
  return (
    `**Username**: ${message.author.username}` +
    `\n**ID**: ${message.author.id}` +
    `\n**Created At**: ${message.author.createdAt}`
  );
};
