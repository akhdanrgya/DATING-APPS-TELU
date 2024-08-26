import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View style = {Styles.container}>
      <Text style = {Styles.text}>TelU Mate</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
    container : {
        backgroundColor : "red",
        padding : 0,
        margin : 0,
        justifyContent : "center",
        alignItems : "center"
    },

    text : {
        color : "white"
    }

})

export default Splash