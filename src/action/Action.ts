import { Message } from "discord.js";

/**
 * An action define a condition and an action that will run if the condition is
 * fullfilled.
 */
export default class Action {
  /**
   * The condition that must be fullfilled so the action can be executed.
   */
  condition: Function;

  /**
   * The action that will run if the condition is fullfilled.
   */
  action: Function;

  /**
   * The constructor will initialize the condition and the action.
   */
  constructor() {
    this.condition = (): boolean => {
      return true;
    };

    this.action = (message: Message) => {
      message.channel.send("Command not defined");
    };
  }

  /**
   * The run method will contains the code to
   * @param message The message object used by Discord to represent a message.
   */
  run(message: Message) {
    if (this.condition(message)) {
      this.action(message);
    }
  }
}
