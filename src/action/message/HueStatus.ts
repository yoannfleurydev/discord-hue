import MessageAction from "./MessageAction";
import { Message } from "discord.js";
import HueRLGenerator from "../../service/HueRLGenerator";
import Axios from "axios";
import { Hue } from "../../types/hue";
import Emoji, { buildEmoji } from "../../emoji/Emoji";

export default class HueStatus extends MessageAction {
  constructor() {
    super("hue status");

    this.action = (message: Message) => {
      Axios.get(HueRLGenerator.lights()).then(res => {
        const lights: Array<Hue.Light> = new Array();

        // Put the JSON of each light in an array because Philips Hue default is
        // an object.
        Object.keys(res.data).forEach(key => {
          lights.push(res.data[key]);
        });

        const messages: Array<String> = new Array();
        lights.forEach(light => {
          messages.push(this.buildLightStatusMessage(light));
        });

        message.channel.send(messages.join("\n"));
      });
    };
  }

  private buildLightStatusMessage(light: Hue.Light): string {
    let status = buildEmoji(Emoji.NO_ENTRY_SIGN); // Default emoji status is no entry sign

    if (light.state.reachable && light.state.on) {
      status = buildEmoji(Emoji.BULB);
    }
    if (light.state.reachable && !light.state.on) {
      status = buildEmoji(Emoji.OCTAGONAL_SIGN);
    }

    return `${status} ${light.name}`;
  }
}
