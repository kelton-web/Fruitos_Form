import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';


interface ButtonProps {
text: string,
Color: string,
onPress: () => void,
styleSubmit: any,
}

const BtnStarted: React.FC<ButtonProps> = ({text, Color, onPress, styleSubmit}) => {
    const btnStyle = { ...styles.textStylebtn,  color: Color };
   
  return (
    <View>
      <Pressable style={({ pressed }) =>[{backgroundColor: pressed ? "lightgray" : "white"},styleSubmit]} onPress={onPress}>
          <Text style={btnStyle}>{text}</Text>
      </Pressable>
    </View>
  )
}

export default BtnStarted

const styles = StyleSheet.create({
    container: {
      
    },
    textStylebtn: {
        fontSize: 22,
        fontFamily: 'AmaticSC-Bold',
    }
})