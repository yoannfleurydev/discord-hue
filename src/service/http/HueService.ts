import axios, { AxiosPromise, AxiosResponse } from "axios";
import { Hue } from "../../types/hue";
import HueRLGenerator from "../HueRLGenerator";

/**
 * Class with static methods to request the Hue API.
 */
export default class HueService {
  /**
   * Update the state of the given light index.
   * @param index The index of the light to update. Each lights in Philips Hue
   * API is an object referenced by an index.
   * @param state The state to set on the given light
   */
  static async updateLight(index: number, state: Hue.State): Promise<boolean> {
    try {
      // TODO: https://github.com/yoannfleurydev/discord-hue/issues/6
      // First get key from local index
      const response: AxiosResponse = await axios.get(HueRLGenerator.lights());
      const key: number = Number(Object.keys(response.data)[index-1]);

      // Then, pass key instead of index
      await axios.put(HueRLGenerator.lightsIndexState(key), state);

      return true;
    } catch {
      console.error(`PUT ${state} on light ${index} failed`);
    }

    return false;
  }

  static async getLights(): Promise<Array<Hue.Light>> {
    const lights: Array<Hue.Light> = new Array();

    try {
      const response: AxiosResponse = await axios.get(HueRLGenerator.lights());

      // Put the JSON of each light in an array because Philips Hue default is
      // an object.
      Object.keys(response.data).forEach(key => {
        lights.push(response.data[key]);
      });
    } catch {
      console.error(`GET lights failed`);
    }

    return lights;
  }
}
