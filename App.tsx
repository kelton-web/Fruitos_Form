import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { useFonts } from '@expo-google-fonts/inter';


export default function App() {
  let [fontsLoaded] = useFonts({
    'NuosuSIL-Regular': require('./assets/NuosuSIL-Regular.ttf'),
    'AmaticSC-Bold': require('./assets/AmaticSC-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return <View></View>;
  }
  return (
      <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
