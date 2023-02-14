import React from "react";
import BasketScreen from "./screens/BasketScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import HomeScreen from "./screens/HomeScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import RestaruntScreen from "./screens/RestaruntScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import { store } from "./app/store";

import Instabug, {
  BugReporting,
  Surveys,
  FeatureRequests,
} from "instabug-reactnative";


Instabug.start("bef80682a48dd6068f292c29dd5f16d9", [
  Instabug.invocationEvent.shake,
]);


const Stack = createNativeStackNavigator();
instabug()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaruntScreen} />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{
              presentation: "modal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PreparingOrder"
            component={PreparingOrderScreen}
            options={{
              presentation: "fullscreenModel",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="deliery"
            component={DeliveryScreen}
            options={{
              presentation: "fullscreenModel",
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
