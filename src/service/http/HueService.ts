import axios, { AxiosPromise, AxiosResponse } from "axios";
import { Hue } from "../../types/hue";
import HueRLGenerator from "../HueRLGenerator";

export default class HueService {
  static async updateLight(index: number, state: Hue.State): Promise<boolean> {
    try {
      await axios.put(HueRLGenerator.lightsIndexState(index), state);

      return true;
    } catch {
      console.error(`PUT ${state} on light ${index} failed`);

      return false;
    }
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
