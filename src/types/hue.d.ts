export declare namespace Hue {
  export interface State {
    on: boolean;
    bri: number;
    hue: number;
    sat: number;
    effect: string;
    xy: number[];
    ct: number;
    alert: string;
    colormode: string;
    mode: string;
    reachable: boolean;
  }

  export interface Swupdate {
    state: string;
    lastinstall: Date;
  }

  export interface Ct {
    min: number;
    max: number;
  }

  export interface Control {
    mindimlevel: number;
    maxlumen: number;
    colorgamuttype: string;
    colorgamut: number[][];
    ct: Ct;
  }

  export interface Streaming {
    renderer: boolean;
    proxy: boolean;
  }

  export interface Capabilities {
    certified: boolean;
    control: Control;
    streaming: Streaming;
  }

  export interface Config {
    archetype: string;
    function: string;
    direction: string;
  }

  export interface Light {
    state: State;
    swupdate: Swupdate;
    type: string;
    name: string;
    modelid: string;
    manufacturername: string;
    productname: string;
    capabilities: Capabilities;
    config: Config;
    uniqueid: string;
    swversion: string;
    swconfigid: string;
    productid: string;
  }
}
