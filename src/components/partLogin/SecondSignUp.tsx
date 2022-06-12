import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import InputLogin from '../../components/_Shared/InputLogin';
import validator from 'validator';
import DateYears from '../_Shared/DateYears';



interface SecondSignUpProps {
  ChangeMail: (text : string) => void
  ChangePassword: (text : string) => void
  onPressedText: () => void
}

const SecondSignUp: React.FC<SecondSignUpProps> = ({onPressedText, ChangeMail, ChangePassword}) => {
  const [inputs, setInputs] = React.useState({
    adresse: '',
    password: '',
    validPassword: '',
  });
  const [format, setFormat] = useState<boolean>(true)
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const TogglePassword = () => {
    setFormat(!format)
}

  return (
    <View style={styles.container}>
        <DateYears /> 
      <View style={{width: "100%"}}>
        <InputLogin label={"Mot de passe"} placeholder={"Entrez votre mot de pass"} changeInput={ChangePassword} Format={format} changeFormat={TogglePassword}/>
        <InputLogin label={"Comfirmer votre mot de passe"} placeholder={"Comfirmer votre mot de passe"} Format={format} changeFormat={TogglePassword}/>
      </View>   
    </View>
  )
}

export default SecondSignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
  
})