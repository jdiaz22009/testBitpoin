import { AxiosRequestConfig } from "axios";
import { request } from "../utils/request";

export const fetcher =
  <T, R>({
    data,
    errorMessage,
    method,
    isSecured,
  }: {
    data?: any;
    errorMessage?: string;
    method: AxiosRequestConfig["method"];
    isSecured?: boolean;
  }) =>
  (url: string) => {
    const response = request<T, R>(method, url, data, isSecured)
      .then((res) => {
        return res?.message;
      })
      .catch(networkErrors(errorMessage));
    return response as Promise<R>;
  };

const networkErrors = (message?: string) => (err: any) => {
  if (err?.response?.status === 401) {
    const msg = message ?? "User not authorized";
    console.warn(msg);
    throw msg;
  }
  console.warn(err?.response?.data?.message);
  throw err?.response?.data?.message || err;
};
