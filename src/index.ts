import * as discord from "discord.js";
import auth from "./../config/auth";
import DiscordEvents from "./discord/DiscordEvents";
import Pong from "./action/message/Pong";
import HueStatus from "./action/message/HueStatus";
import MessageAction from "./action/message/MessageAction";
import HueTurn from "./action/message/HueTurn";

const client = new discord.Client();

// Check when the bot is ready to receive message
client.on(DiscordEvents.READY, () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Put the list of your command in this array
const messageActions: Array<MessageAction> = [
  new Pong(),
  new HueStatus(),
  new HueTurn()
];

client.on(DiscordEvents.MESSAGE, message => {
  messageActions.forEach(messageAction => {
    messageAction.run(message);
  });
});

// Log the bot to Discord using the secret token
client.login(auth.token);
