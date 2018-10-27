import parameters from "../../config/parameters";

/**
 * Class with static methods to generate the URL.
 */
export default class HueRLGenerator {
  static base(): string {
    return `http://${parameters.hue.ip}/api/${parameters.hue.user}`;
  }

  static lights(): string {
    return `${this.base()}/lights`;
  }

  static lightsIndexState(index: number): string {
    return `${this.base()}/lights/${index}/state`;
  }
}
