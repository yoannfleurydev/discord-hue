import MessageAction from "./MessageAction";
import { Message } from "discord.js";
import WeatherURLGenerator from "../../service/WeatherURLGenerator";
import Axios, { AxiosResponse } from "axios";
import { OpenWeatherApi } from "../../types/weather";

export default class WeatherAction extends MessageAction {
  constructor() {
    super("weather");
  }

  action: Function = (message: Message) => {
    Axios.get(WeatherURLGenerator.weather("Amiens")).then(
      (res: AxiosResponse<OpenWeatherApi.RootObject>) => {
        message.channel.send(`${res.data.main.temp}°C`);
      }
    );
  };
}
