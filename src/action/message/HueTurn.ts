import MessageAction from "./MessageAction";
import { Message } from "discord.js";
import Emoji, { buildEmoji } from "../../emoji/Emoji";
import HueService from "../../service/http/HueService";

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

    this.action = async (message: Message) => {
      // The space are usefull for the splices to compute the length correctly
      const CONTENT_WITH_SPACE: string = `${content} `;
      const STATUS_ON_WITH_SPACE: string = ` ${Status.ON}`;
      const STATUS_OFF_WITH_SPACE = ` ${Status.OFF}`;

      // Should the light be ON or OFF ? If the end of the content is " on",
      // then on is equal to true.
      const on =
        message.content.slice(-STATUS_ON_WITH_SPACE.length) ===
        STATUS_ON_WITH_SPACE;

      // Get the string selector between the two commands
      // hue turn THE STRING [on|off]
      const selector = message.content.slice(
        CONTENT_WITH_SPACE.length,
        -(on ? STATUS_ON_WITH_SPACE.length : STATUS_OFF_WITH_SPACE.length)
      );

      const lights = await HueService.getLights();
      const index =
        lights.findIndex(
          light => light.name.toLowerCase() === selector.toLowerCase()
        ) + 1;

      if (index === 0) {
        message.channel.send(`No light matching the selector`);
        return;
      }

      if (await HueService.updateLight(index, { on })) {
        message.channel.send(
          `${buildEmoji(Emoji.BULB)} Light turned ${
            on ? Status.ON : Status.OFF
          }`
        );
      } else {
        message.channel.send(
          `${buildEmoji(Emoji.BOOM)} Error while turning the light on/off`
        );
      }
    };
  }
}
