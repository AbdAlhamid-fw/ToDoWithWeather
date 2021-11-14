import axios, { AxiosRequestConfig } from "axios";

export default class ApiService {
  endPoint?: string | null;
  URL = "http://192.168.100.15:9000/" ?? process.env.REACT_APP_BASE_API_URL;

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

  add = async (
    endPoint?: string,
    request?: any,
    config?: AxiosRequestConfig
  ) => {
    let res = axios.post(`${this.URL + endPoint}`, request, config);
    return res;
  };

  edit = async (
    endPoint?: string,
    request?: any,
    config?: AxiosRequestConfig
  ) => {
    let res = axios.put(`${this.URL + endPoint}`, request, config);
    return res;
  };

  delete = async (endPoint?: string, id?: number) => {
    let res = axios.delete(` ${this.URL + endPoint}`, { data: { id: id } });
    return res;
  };
}
