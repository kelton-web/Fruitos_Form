
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Platform, Keyboard, TextInput } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const DateYears = () => {
    const [date, setDate] = useState<undefined | Date | string>(new Date().toLocaleDateString());
    const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);
  
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date: Date) => {
      hideDatePicker();
      setDate(date.toLocaleDateString());
    };
    
    
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={{width: Platform.OS === 'ios' ? '85%': "90%",}}>
          <Text style={{paddingBottom: 6, color: 'gray'}}>Date de naissance</Text>
        </View>
        <View style={styles.styleSubmit}>
        {Keyboard.dismiss()}
          <TextInput value={date?.toString()} onPressIn={showDatePicker} />
        </View>
      {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
      <View>

      <DateTimePickerModal
        onChange={() => setDate}
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      </View>
      </View>
    </SafeAreaView>
  );
};

export default DateYears;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 10,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  datePickerStyle: {
    width: "80%",
    marginTop: 20,
  },
  styleSubmit: {
    height: 55,
    width: "90%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    paddingLeft: 20,
    justifyContent: 'center',
    
}
});
