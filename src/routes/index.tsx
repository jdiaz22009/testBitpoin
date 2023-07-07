import React, { useEffect } from "react";

import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { SWRConfig } from "swr";

import AppStack from "./app.stack";
import { useLoader } from "../hooks/useLoader";
import Loader from "../components/Loader";
import InterceptorService from "../utils/interceptorService";

const Navigator = () => {
  const navigationRef = useNavigationContainerRef();
  const { isLoading: showLoader } = useLoader();


  useEffect(() => {
    if (!InterceptorService.interceptor && navigationRef != null) {
      console.log("interceptor instance");
      InterceptorService.setInterceptorListener(true);
    }
  }, [navigationRef]);

  return (
    <SWRConfig
      value={{
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
      }}
    >
      {showLoader && <Loader show={showLoader} />}

      <NavigationContainer ref={navigationRef}>
        <AppStack />
      </NavigationContainer>
    </SWRConfig>
  );
};

export default Navigator;
