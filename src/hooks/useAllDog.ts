import useSWR from "swr";

import { CONFIG } from "../utils/config";
import { fetcher } from "../services/feacher";

export const useAllDog = () => {
  const url = CONFIG.API.ALL_DOG;
  const { data, error, mutate, isLoading } = useSWR<any>(
    url,
    fetcher({ method: "get", isSecured: false })
  );

  return {
    dog: data,
    error,
    loading: isLoading,
    reloadDog: mutate,
  };
};
