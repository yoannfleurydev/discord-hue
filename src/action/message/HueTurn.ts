import MessageAction from "./MessageAction";
import { Message } from "discord.js";
import HueRLGenerator from "../../service/HueRLGenerator";
import Axios from "axios";
import Emoji, { buildEmoji } from "../../emoji/Emoji";

const content: string = "hue turn";

enum Status {
  ON = "on",
  OFF = "off"
}

/**
 * Command to turn the light on / off
 */
export default class HueTurn extends MessageAction {
  constructor() {
    super(content);

    this.action = (message: Message) => {
      const on =
        message.content.slice(content.length).replace(/ /g, "") === Status.ON;

      // TODO Change the index based on message
      Axios.put(HueRLGenerator.lightsIndexState(2), { on })
        .then(() => {
          message.channel.send(
            buildEmoji(Emoji.BULB) +
              " Light turned " +
              (on ? Status.ON : Status.OFF)
          );
        })
        .catch(err => {
          console.error(err);
          message.channel.send("Error while turning the light on/off");
        });
    };
  }
}
