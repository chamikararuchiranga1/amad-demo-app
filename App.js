import React from "react";
import { View, Text } from 'react-native'
import Home from "./pages/Home";
import Login from "./pages/Login";
import { SafeAreaProvider } from "react-native-safe-area-context";
import About from "./pages/About";
 
function App() {
  return (
    <View style={{flex:1}}>
      <About/>
    </View>
  )
}

export default App;