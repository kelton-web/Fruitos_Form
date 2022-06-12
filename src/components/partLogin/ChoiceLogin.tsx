import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import InputLogin from '../../components/_Shared/InputLogin';
import validator from 'validator';

interface ChoiceLoginProps {
  onPressedText: () => void
  ChangeMail: (text : string) => void
  ChangePassword: (text : string) => void
  validateEmail?: (text : string) => void
  error?: string,
}

const ChoiceLogin: React.FC<ChoiceLoginProps> = ({onPressedText, ChangeMail, ChangePassword, validateEmail, error}) => {
  const [format, setFormat] = useState<boolean>(true)

  const TogglePassword = () => {
    setFormat(!format)
}
 
  return (
    <View style={styles.container}>
      <View style={{width: '100%',}}>
        <InputLogin label={"Email"} placeholder={"Entrez votre mail"} changeInput={ChangeMail}  />
      </View>
        
      <InputLogin label={"Mot de passe"} placeholder={"Entrez votre mot de pass"} changeInput={ChangePassword}  type="numeric"  Format={format} changeFormat={TogglePassword}/>
    </View>
  )
}

export default ChoiceLogin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
  
})