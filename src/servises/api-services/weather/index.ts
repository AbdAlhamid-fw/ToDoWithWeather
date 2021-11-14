// import IWeather from "./interfaces/weather";

import ApiService from "..";

class WeatherService {
  private Api: ApiService;
  private ApiKey: string = "1f30fc67d6acc0ecb541b6ed83738417";
  constructor() {
    this.Api = new ApiService();
  }

  getCurrentWeather = async (cityName: string) => {
    console.log("getCurrentWeather in services", cityName);

    let res = this.Api.getOne(
      `openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.ApiKey}`
    );
    return res;
  };
}

const weatherService = new WeatherService();

export default weatherService;
