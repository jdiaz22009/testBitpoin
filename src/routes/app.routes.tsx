import React from "react";

import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import HomeScreen from "../screens/App/home";
import ImageGallery from "../screens/App/GalleryDog";

interface IAppRoute {
  name: string;
  component: React.ComponentType<any>;
  options?: NativeStackNavigationOptions;
}

export const appRoutes: IAppRoute[] = [
  {
    name: "Home",
    component: HomeScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: "Gallery",
    component: ImageGallery,
    options: {},
  },
];
