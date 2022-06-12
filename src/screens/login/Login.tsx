import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native';
import InputLogin from '../../components/_Shared/InputLogin';
import ChoiceLogin from '../../components/partLogin/ChoiceLogin';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParams } from '../../navigation/Navigation';
import BtnStarted from '../../components/_Shared/btnStarted';
import ChoiceSignUp from '../../components/partLogin/ChoiceSignUp';
import SecondSignUp from '../../components/partLogin/SecondSignUp';

interface LoginProp {

}

const Login = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootParams>>();
    
    const [login, setLogin] = useState<string>("oneLogin");
    const [mail, setMail] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [password, SetPassword] = useState<string | number>("");
    const [doublePassword, SetDoublePassword] = useState<string | number>("");
    const [name, SetName] = useState<string | number>("");
    const [adresse, SetAdresse] = useState<string | number>("");
    
    
    
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');
    
    
    const emailRegex = /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/;
    
    const ChangeMail = (text : string) => {
      if (!mail){
        setMail(mail);
        console.log(mail)
      }
    }
    const validateEmail = (text: string) => {
      console.log(text);
      if (emailRegex.test(text))  {
        setIsValid(true);
        setMessage('Your email looks good!');
        console.log(message);

      } else {
        setIsValid(false);
        setMessage('Please enter a valid email!');
        console.log(message);
      
      }
    }
    const [passwordError, SetPasswordError] = useState<string>("")
    const [passwordvalid, SetPasswordvalid] = useState<boolean>(false)
    const passwordRegex = /^[^\W][0-9_]{2,4}$/;

  const ChangePassword = (text : any) => {

    if (passwordRegex.test(text)) {
      SetPasswordvalid(true);
      setMessage('Your password looks good!');
      console.log(message);
      
    } else {
      SetPasswordvalid(false);
      setMessage('Please enter a valid password!');
      console.log(message);
    }
  }

    const onPressedText = () => {
        console.log("Mon mot de passe oublié");
    }

    const HandlePressedGmail = () => {
        console.log("Hello Gmail");
    }
    const HandlePressed = () => {
        console.log("btn connexion");
    }

    const HandlePressedFalse = () => {
        setLogin("threeLogin")
    }
    const HandleOnPressLogin = () => {
        setLogin("oneLogin")
    }
    const HandleOnPressSignUp = () => {
        setLogin("twoLogin")
    }

    const styleSubmitStyle = {
        paddingHorizontal: "28%",
        paddingVertical: "3.5%",
        borderRadius: 10,
        backgroundColor: "#10ac84"
  }
    const styleSubmit = {
        paddingHorizontal: "28%",
        paddingVertical: "3.5%",
        borderRadius: 10,
        backgroundColor: "#10ac84"
  }
    const styleSubmitGoogle = {
        paddingHorizontal: "18%",
        paddingVertical: "3.5%",
        borderRadius: 10,
        backgroundColor: "transparent",
        borderWidth: 1
  }


  const textChoiceStyle = {
    fontSize: 26,
    fontFamily: 'AmaticSC-Bold',
    color: '#10ac84'
  }
  const textChoiceStyleTwo = {
    fontSize: 20,
    fontFamily: 'AmaticSC-Bold',
    color: '#000',
    marginTop: 4
  }

  

    if (login === "oneLogin"){
        
        return (
          <View style={styles.container}>
            <View style={styles.styleLogo}>
                <View style={styles.smallContaineImg}>
                      <Image style={styles.imgStyle} source={require('../../../assets/img/logobg.png')}/>
                </View>
            </View>
            <View style={styles.styleTitle}>
                <Text style={styles.textLogoStyle}>Frui<Text style={{color: '#10ac84'}}>tos</Text></Text>
                <View style={styles.loginChoiceStyle}>
                    <Pressable style={({ pressed }) =>[{backgroundColor: pressed ? "#dfe6e9" : "transparent"},styles.styleSubmitChoice]} onPress={HandleOnPressLogin}>
                        <Text style={textChoiceStyle}>Connexion</Text>
                    </Pressable>
                    <Pressable style={({ pressed }) =>[{backgroundColor: pressed ? "#dfe6e9" : "transparent"},styles.styleSubmitChoice]} onPress={HandleOnPressSignUp}>
                        <Text style={textChoiceStyleTwo}>Inscription</Text>
                    </Pressable>
                </View>
                <View style={{width: '100%', flex: 1}}>
                    <ChoiceLogin ChangeMail={ChangeMail} ChangePassword={ChangePassword} onPressedText={onPressedText} validateEmail={validateEmail} error={message}/> 
                </View>
                <Text style={{color: 'red'}}>{passwordError}</Text> 
                <Text onPress={onPressedText} style={styles.stylesText}>Mot de passe oublié</Text>
            </View>
           
            <View style={styles.styleBtn}>
                <View style={styles.smallContainerButton}>
                  <BtnStarted text={"Connexion"} Color={"#fff"} onPress={HandlePressed} styleSubmit={styleSubmit}/>
                  <View style={{marginTop: 6, justifyContent: 'center', alignItems: 'center', marginBottom: 14}}>
                      <BtnStarted text={"Connexion avec Gmail"} Color={"#10ac84"} onPress={HandlePressedGmail} styleSubmit={styleSubmitGoogle}/>
                  </View>
                  <Text>Tu n'avais pas de compte ? <Text style={{color: '#10ac84', }} onPress={HandleOnPressSignUp}>Inscrit toi</Text></Text>
                </View>
            </View>
          </View>
        )
       
      } else if(login === "twoLogin") {
        const textChoiceStyleTwo = {
            fontSize: 26,
            fontFamily: 'AmaticSC-Bold',
            color: '#10ac84'
          }
          const textChoiceStyle = {
            fontSize: 20,
            fontFamily: 'AmaticSC-Bold',
            color: '#000',
            marginTop: 4
          }
        return (
          <View style={styles.container}>
            <View style={styles.styleLogoTwo}>
                <View style={styles.smallContaineImg}>
                      <Image style={styles.imgStyle} source={require('../../../assets/img/logobg.png')}/>
                </View>
            </View>
            <View style={styles.styleTitleTwo}>
                <Text style={styles.textLogoStyle}>Frui<Text style={{color: '#10ac84'}}>tos</Text></Text>
                <View style={styles.loginChoiceStyleTwo}>
                    <Pressable style={({ pressed }) =>[{backgroundColor: pressed ? "#dfe6e9" : "transparent"},styles.styleSubmitChoice]} onPress={HandleOnPressLogin}>
                        <Text style={textChoiceStyle}>Connexion</Text>
                    </Pressable>
                    <Pressable style={({ pressed }) =>[{backgroundColor: pressed ? "#dfe6e9" : "transparent"},styles.styleSubmitChoice]} onPress={HandleOnPressSignUp}>
                        <Text style={textChoiceStyleTwo}>Inscription</Text>
                    </Pressable>
                </View>
                <ChoiceSignUp ChangeMail={ChangeMail} ChangePassword={ChangePassword} onPressedText={onPressedText}  />  
            </View>
           
            <View style={styles.styleBtnTwo}>
                <View style={styles.smallContainerButton}>
                  <View style={{marginTop: 6, justifyContent: 'center', alignItems: 'center'}}>
                    <BtnStarted text={"Suivant"} Color={"#fff"} onPress={HandlePressedFalse} styleSubmit={styleSubmitStyle}/> 
                  </View>
                  <Text style={{top: 8}}>Tu as déja un compte ? <Text style={{color: '#10ac84', }} onPress={HandleOnPressLogin}>Connecte toi</Text></Text>
                </View>
            </View>
          </View>
        )
        
      } else if (login === "threeLogin") {
        const textChoiceStyleTwo = {
            fontSize: 26,
            fontFamily: 'AmaticSC-Bold',
            color: '#10ac84'
          }
          const textChoiceStyle = {
            fontSize: 20,
            fontFamily: 'AmaticSC-Bold',
            color: '#000',
            marginTop: 4
          }
        return (
          <View style={styles.container}>
            <View style={styles.styleLogoTwo}>
                <View style={styles.smallContaineImg}>
                      <Image style={styles.imgStyle} source={require('../../../assets/img/logobg.png')}/>
                </View>
            </View>
            <View style={styles.styleTitleTwo}>
                <Text style={styles.textLogoStyle}>Frui<Text style={{color: '#10ac84'}}>tos</Text></Text>
                <View style={styles.loginChoiceStyleTwo}>
                    <Pressable style={({ pressed }) =>[{backgroundColor: pressed ? "#dfe6e9" : "transparent"},styles.styleSubmitChoice]} onPress={HandleOnPressLogin}>
                        <Text style={textChoiceStyle}>Connexion</Text>
                    </Pressable>
                    <Pressable style={({ pressed }) =>[{backgroundColor: pressed ? "#dfe6e9" : "transparent"},styles.styleSubmitChoice]} onPress={HandleOnPressSignUp}>
                        <Text style={textChoiceStyleTwo}>Inscription</Text>
                    </Pressable>
                </View>
                <SecondSignUp ChangeMail={ChangeMail} ChangePassword={ChangePassword} onPressedText={onPressedText}/>  
            </View>
           
            <View style={styles.styleBtnTwo}>
                <View style={styles.smallContainerButton}>
                  <View style={{marginTop: 6, justifyContent: 'center', alignItems: 'center'}}>
                    <BtnStarted text={"Connexion"} Color={"#fff"} onPress={HandlePressed} styleSubmit={styleSubmit}/> 
                  </View>
                  <Text style={{top: 8}}>Tu as déja un compte ? <Text style={{color: '#10ac84', }} onPress={HandleOnPressLogin}>Connecte toi</Text></Text>
                </View>
            </View>
          </View>
        )
      }
      
      
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    styleLogo: {
        width: '100%',
        flex: 1,
    
    },
    styleLogoTwo: {
        width: '100%',
        flex: .7,
    },
    smallContaineImg: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: '100%',
        width: '100%',
    },
    imgStyle: {
        width: "60%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: "contain"
    },
    styleTitle: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
        padding: '4%',
    },
    styleTitleTwo: {
        flex: 2.3,
        width: '100%',
        alignItems: 'center',
    },
    loginChoiceStyle: {
        width: "50%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 25
    },
    loginChoiceStyleTwo: {
        width: "50%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    styleBtn: {
        flex: 1.5,
        width: '100%',
    },
    styleBtnTwo: {
        flex: .6,
        width: '100%',
    },
    textLogoStyle: {
        fontSize: 55,
        fontFamily: 'AmaticSC-Bold',
        color: '#000'
      },
    
      smallContainerButton: {
        width: "100%", 
        height: "50%", 
        alignItems: 'center'
      },
      styleSubmitChoice: {
        
      },
      stylesText: {
        width: "80%",
        textAlign: "right",
        color: "#10ac84"
    }
})