import { CONFIG } from "../../utils/config";
import { request } from "../../utils/request";

export const getDogsImg = async (
  breed: string,
  limit: string
): Promise<any> => {
  const url = CONFIG.API.IMAG_DOC.replace("${breed}", breed) + "/" + limit;
  console.log(url);
  return request("get", url, null, false);
};
