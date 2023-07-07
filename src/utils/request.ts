import axios, {
  AxiosResponse,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosInstance,
} from "axios";
import { CONFIG } from "./config";

export const axiosInstance = axios.create();
axiosInstance.defaults.timeout = CONFIG.AXIOS_TIMEOUT;

export const request = async <T, R>(
  method: AxiosRequestConfig["method"],
  url: string,
  data?: any,
  secured?: boolean
) => {
  try {
    let headers: AxiosRequestHeaders = {
      Accept: "application/json",
    };

    const options: AxiosRequestConfig = {
      method,
      data,
      url,
      headers,
      baseURL: CONFIG.API.BASE_URL,
    };
    console.log(JSON.stringify(options), "option");
    const response = await axiosInstance.request<T, AxiosResponse<R>>(options);
    if (response.status === 200) {
      return response.data;
    } else {
      throw response;
    }
  } catch (error) {
    console.warn(`axios request error ${error} url: ${url} methods: ${method}`);
    throw error;
  }
};
