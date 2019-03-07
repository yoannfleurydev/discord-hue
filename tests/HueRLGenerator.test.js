import HueRLGenerator from "../src/service/HueRLGenerator";
import parameters from "../config/parameters";

test("base method should return good url", () => {
  expect(HueRLGenerator.base()).toBe(
    `http://${parameters.hue.ip}/api/${parameters.hue.user}`
  );
});

test("lights method should return the lights url", () => {
  expect(HueRLGenerator.lights()).toBe(
    `http://${parameters.hue.ip}/api/${parameters.hue.user}/lights`
  );
});

test("lightsIndexState method should return the good index state url", () => {
  expect(HueRLGenerator.lightsIndexState(3)).toBe(
    `http://${parameters.hue.ip}/api/${parameters.hue.user}/lights/3/state`
  );
});
