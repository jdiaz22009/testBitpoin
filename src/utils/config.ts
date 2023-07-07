export interface IConfig {
  AXIOS_TIMEOUT: number;
  API: IApi;
}

export interface IApi {
  BASE_URL: string;
  ALL_DOG: string;
  IMAG_DOC: string;
}

export const CONFIG: IConfig = {
  AXIOS_TIMEOUT: 12000,
  API: {
    BASE_URL: "https://dog.ceo/api/",
    ALL_DOG: "breeds/list/all",
    IMAG_DOC: "breed/${breed}/images/random",
  },
};
