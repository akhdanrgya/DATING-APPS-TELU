import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={Styles.container}>
      <Text>App bang!!!</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
  container : {
    backgroundColor : "white",
    margin : 0,
    padding : 0
  }

  

})

export default App