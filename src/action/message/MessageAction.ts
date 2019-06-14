import { Message } from "discord.js";
import Action from "../Action";

export default class MessageAction extends Action {
  /**
   * The command to trigger the action.
   */
  readonly content: string;

  constructor(content: string) {
    super();
    this.content = content;

    this.condition = (message: Message): boolean => {
      return message.content
        .toLowerCase()
        .startsWith(this.content.toLowerCase());
    };
  }
}
