import MessageAction from "./MessageAction";
import { Message } from "discord.js";

class Pong extends MessageAction {
  action: Function = (message: Message) => {
    message.channel.send("Pong");
  };

  constructor() {
    super("ping");
  }
}

export default Pong;
