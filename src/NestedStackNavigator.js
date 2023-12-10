import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Component } from "react";
import { ScreenC } from "./ScreenC";

const Stack = createNativeStackNavigator();

export class NestedStackNavigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Screen C" component={ScreenC}/>
      </Stack.Navigator>
    )
  }
}