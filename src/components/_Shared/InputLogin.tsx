import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

interface InputProps {
    label: string,
    placeholder: string,
    changeInput?: (text : string) => void,
    type?: string,
    onFocus?: () => void,
    //validateCourriel?: any,
    error?: any,
    props?: any[],
    Format?: true | false,
    Validation?: any,
    changeFormat?: () => void, 
    onBlur?: () => void, 
}

const InputLogin: React.FC<InputProps> = ({label, placeholder, changeInput,type, onFocus,onBlur, error,Validation,Format,changeFormat,}) => {

    
    const [isFocused, setIsFocused] = useState<boolean>(false)

  return (
    <View style={styles.container}>
        <View style={styles.smallContainerName}>
            <Text style={{color: 'gray', marginBottom: 5}}>{label}</Text>
            <TextInput 
            style={styles.textInputName} 
            placeholder={placeholder} 
            onChangeText={changeInput} 
            secureTextEntry={Format} 
           
            onBlur={onBlur}
            />
            {error &&
            <View style={{alignItems: 'center'}}>
                <Text style={{color: 'red'}}>{error}</Text>
            </View>
            }
            {label === 'Comfirmer votre mot de passe' &&
            <View style={{position: 'absolute', right: 8,top: "46%",}}>
               {Format ? <Ionicons name='eye-off' size={28} color='green' onPress={changeFormat} />: <Ionicons name='eye' size={29} color='green' onPress={changeFormat} />} 
            </View>
            } 
            {label === 'Mot de passe' &&
            <View style={{position: 'absolute', right: 8,top: "46%",}}>
               {Format ? <Ionicons name='eye-off' size={28} color='green' onPress={changeFormat} />: <Ionicons name='eye' size={29} color='green' onPress={changeFormat} />}
            </View>
            }
        </View>
    </View>
  )
}

export default InputLogin;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputName: {
        height: 55,
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
        paddingLeft: 10,
    
    },
    smallContainerName: {
        width: '80%',
       marginBottom: 10,
    }
})