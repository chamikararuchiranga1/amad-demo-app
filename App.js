import React from "react";
import { View, Text } from 'react-native'
import Home from "./pages/Home";
import Login from "./pages/Login";
import { SafeAreaProvider } from "react-native-safe-area-context";
 
function App() {
  return (
    <SafeAreaProvider>
      <View>
        <Login />
      </View>
    </SafeAreaProvider>
  )
}

export default App;