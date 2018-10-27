import parameters from "../../config/parameters";

/**
 * Class to fetch data from the Open Weather Map API.
 */
export default class WeatherURLGenerator {
  /**
   * Return the base  URL for the Weather API.
   */
  static base(): string {
    return `https://${parameters.weather.base}`;
  }

  /**
   * Fetch the weather for the given city
   * @param city city name and country code divided by comma, use ISO 3166 country codes
   */
  static weather(city: string): string {
    return `${this.base()}/weather?units=metric&q=${city}&appid=${
      parameters.weather.key
    }`;
  }
}
