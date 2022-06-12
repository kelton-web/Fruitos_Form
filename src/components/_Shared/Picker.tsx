import React, { useRef, useState } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";

const PickerPerso = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Mr");
  console.log(selectedLanguage)
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Masculin" value="Mr" />
        <Picker.Item label="Féminin" value="Mme" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    width: "100%",
    paddingBottom: Platform.OS === 'ios' ? 0 : 8,
    alignItems: "center",
  },
  picker: {
    width: Platform.OS === 'ios' ? "85%" : "80%",
    backgroundColor: Platform.OS === 'ios' ? "lightGray" : "#ecf0f1",
    
  }
});

export default PickerPerso;
