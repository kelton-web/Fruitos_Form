import React, { useState } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native';
import InputLogin from '../../components/_Shared/InputLogin';
import PickerPerso from '../_Shared/Picker';

interface ChoiceSignUpProps {
  ChangeMail: (text : string) => void
  ChangePassword: (text : string) => void
  onPressedText: () => void,
  //validateCourriel: (mail: string) => boolean
  
}

const ChoiceSignUp: React.FC<ChoiceSignUpProps> = ({onPressedText, ChangeMail, ChangePassword}) => {


  return (
    <View style={styles.container}>
      <PickerPerso />
      <InputLogin label={"Nom Complet"} 
                  placeholder={"Entrez votre mail"}/>
      <InputLogin label={"Email"} 
                  placeholder={"Entrez votre mail"} 
                  changeInput={ChangeMail} 
                  error="mail pas valide"/>
    </View>
  )
}

export default ChoiceSignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
  
})