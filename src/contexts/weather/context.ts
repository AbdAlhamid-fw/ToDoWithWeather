import { createContext } from "react";

export interface IInternalState {
  data?: any;
  ditails?: any;
  loading: boolean;
  actionLoading: boolean;
  error?: any;
}

export const internalState: IInternalState = {
  loading: false,
  actionLoading: false,
};

export interface IExternalState extends IInternalState {
  actions: {
    getCurrentWeather: () => void;
  };
}

export const externalState: IExternalState = {
  ...internalState,
  actions: {
    getCurrentWeather: () => {},
  },
};

const WeatherContext = createContext(externalState);

export default WeatherContext;
