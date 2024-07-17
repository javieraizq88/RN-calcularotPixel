import { StatusBar, View, } from "react-native"
import React, { } from "react"

import { CalculatorPixelScreen } from "./src/presentation/screens/CalculatorPixelScreen";
import { globalStyles } from "./src/config/theme/global.styles";

export const App = () => {
  return (
    <View style={globalStyles.background}>
      <StatusBar
        backgroundColor={'black'}
        barStyle={"light-content"}
      />
      <CalculatorPixelScreen />
    </View>
  )
}