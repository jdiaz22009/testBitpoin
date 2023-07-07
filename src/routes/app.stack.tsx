import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { appRoutes } from "./app.routes";

const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShadowVisible: false,
        orientation: "portrait",
      }}
    >
      {appRoutes.map((item, index) => (
        <Stack.Screen
          key={index}
          options={item.options}
          name={item.name}
          component={item.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AppStack;
