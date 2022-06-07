import React from 'react'
import { StyleSheet, Text, View,  } from 'react-native'

const Wallpaper = () => {
  return (
    <View style={styles.container}>
      <Text>Fruitos</Text>
    </View>
  )
}

export default Wallpaper

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f84f51"
  }
})