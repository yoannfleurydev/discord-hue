import MessageAction from "./MessageAction";
import { Message } from "discord.js";
import HueRLGenerator from "../../service/HueRLGenerator";
import Axios from "axios";
import { Hue } from "../../types/hue";

export default class HueStatus extends MessageAction {
  constructor() {
    super("hue status");

    this.action = (message: Message) => {
      Axios.get(HueRLGenerator.lights()).then(res => {
        const lights: Array<Hue.Light> = new Array();

        Object.keys(res.data).forEach(key => {
          lights.push(res.data[key]);
        });

        const messages: Array<String> = new Array();
        lights.forEach(light => {
          messages.push(`:bulb: ${light.name}`);
        });

        message.channel.send(messages.join("\n"));
      });
    };
  }
}
