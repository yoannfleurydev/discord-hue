import MessageAction from "./MessageAction";
import { Message } from "discord.js";
import HueRLGenerator from "../../service/HueRLGenerator";
import Axios from "axios";

const content: string = "hue turn";

/**
 * Command to turn the light on / off
 */
export default class HueTurn extends MessageAction {
  constructor() {
    super(content);

    this.action = (message: Message) => {
      const on = message.content.slice(content.length).includes("on");

      // TODO Change the index based on message
      Axios.put(HueRLGenerator.lightsIndexState(2), { on })
        .then(() => {
          message.channel.send(":bulb: Light turned " + (on ? "on" : "off"));
        })
        .catch(err => {
          console.error(err);
          message.channel.send("Error while turning the light on/off");
        });
    };
  }
}
