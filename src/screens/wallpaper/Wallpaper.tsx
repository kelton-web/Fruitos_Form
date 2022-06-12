import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParams } from '../../navigation/Navigation';
import { Image, StyleSheet, Text, View,  } from 'react-native'
import BtnStarted from '../../components/_Shared/btnStarted';

interface WallpaperProps {
  HandlePressed: () => void,
}

const Wallpaper: React.FC<WallpaperProps> = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParams>>();
  
  const HandlePressed = () => {
    console.log('Press')
    navigation.navigate('Login');
  }

  const styleSubmit = {
        paddingHorizontal: "14%",
        paddingVertical: "3.5%",
        borderRadius: 10,
  }
  return (
    <View style={styles.container}>
      <View style={styles.imgBackground}>
        <Image style={styles.imgStyle} source={require('../../../assets/img/logobg.png')}/>
      </View>
      <View style={styles.descStyle}>
        <Text style={styles.textLogoStyle}>Fruitos</Text>
        <Text style={styles.textDescStyle}>Obtenez votre nourriture nécessaire facilement</Text>
        <Text style={styles.textDescStyle}>de chez vous</Text>
      </View>
      <View style={styles.btnStyle}>
        <BtnStarted text={"Commencer"} Color={"#10ac84"} onPress={HandlePressed} styleSubmit={styleSubmit} />
      </View>
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
    backgroundColor: "#10ac84"
  },
  imgBackground: {
    flex: 1.3,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    height: '90%',
    width: '90%',
    resizeMode: "contain",
    top: 50,
  },
  descStyle: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogoStyle: {
    fontSize: 55,
    fontFamily: 'AmaticSC-Bold',
    color: 'white'

  },
  textDescStyle: {
    fontSize: 22,
    fontFamily: 'AmaticSC-Bold',
    color: 'white',
    margin: 10,
    marginBottom: -15
  },
  btnStyle: {
    flex: .8,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
})