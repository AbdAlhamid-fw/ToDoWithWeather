import axios, { AxiosRequestConfig } from "axios";

export default class ApiService {
  endPoint?: string | null;
  URL = "https://openweathermap.org/api." ?? process.env.REACT_APP_BASE_API_URL;

  constructor(endPoint?: string) {
    this.endPoint = endPoint ?? null;
  }

  getAll = async (endPoint?: string, config?: AxiosRequestConfig) => {
    let res = axios.get(` ${this.URL + endPoint}`, config);
    return res;
  };

  getOne = async (endPoint?: string, params?: any) => {
    let res = axios.get(` ${this.URL + endPoint}`, { params: params });
    return res;
  };
}
