import React from "react";
import { View } from "react-native";

export class ScreenA extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>이것은 ScreenA 라고 합니다.</Text>
      </View>
    )
  }
}