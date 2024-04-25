import {StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

// Temperature Convertor Component
export default function Temp() {
  const [inputTemp, setInputTemp] = useState('');
  const [inputUnit, setInputUnit] = useState('Celsius');
  const [outputTemp, setOutputTemp] = useState('');
  const [outputUnit, setOutputUnit] = useState('Fahrenheit');

  const convertTemperature = () => {
    const temp = parseFloat(inputTemp);
    let convertedTemp;

    if (inputUnit === 'Celsius') {
      if (outputUnit === 'Fahrenheit') {
        convertedTemp = (temp * 9) / 5 + 32;
      } else if (outputUnit === 'Kelvin') {
        convertedTemp = temp + 273.15;
      }
    } else if (inputUnit === 'Fahrenheit') {
      if (outputUnit === 'Celsius') {
        convertedTemp = ((temp - 32) * 5) / 9;
      } else if (outputUnit === 'Kelvin') {
        convertedTemp = ((temp - 32) * 5) / 9 + 273.15;
      }
    } else if (inputUnit === 'Kelvin') {
      if (outputUnit === 'Celsius') {
        convertedTemp = temp - 273.15;
      } else if (outputUnit === 'Fahrenheit') {
        convertedTemp = ((temp - 273.15) * 9) / 5 + 32;
      }
    }

    setOutputTemp(convertedTemp.toFixed(2));
  };



  return (
    <View style={styles.mainBox}>
      

      <View style={styles.inputBox}>
      <Text style={styles.title}> Temperature Convertor </Text>
        <View style={styles.Box1}>
          <View style={styles.inputHeader}>
            <Picker
              selectedValue={inputUnit}
              style={{height: 50, width: 200, color: 'white'}}
              onValueChange={itemValue => setInputUnit(itemValue)}>
              <Picker.Item label="Celsius" value="Celsius" />
              <Picker.Item label="Fahrenheit" value="Fahrenheit" />
              <Picker.Item label="Kelvin" value="Kelvin" />
            </Picker>
          </View>
          <View style={styles.inputDisplay}>
            <TextInput
              style={styles.input}
              placeholder="Enter Temperature"
              keyboardType="numeric"
              value={inputTemp}
              onChangeText={text => setInputTemp(text)}
            />
          </View>
        </View>

        <View style={styles.Box1}>
          <View style={styles.inputHeader}>
            <Picker
              selectedValue={outputUnit}
              style={{height: 50, width: 200, color: 'white'}}
              onValueChange={itemValue => setOutputUnit(itemValue)}>
              <Picker.Item label="Celsius" value="Celsius" />
              <Picker.Item label="Fahrenheit" value="Fahrenheit" />
              <Picker.Item label="Kelvin" value="Kelvin" />
            </Picker>
          </View>
          <View style={styles.inputDisplay}>
            <TextInput
              style={styles.input}
              placeholder="Result"
              editable={false}
              value={outputTemp}
            />
          </View>
        </View>
        <TouchableOpacity onPress={convertTemperature} style={[styles.button]}>
      <Text style={[styles.text]}>Convert</Text>
    </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color:"white",
  },
  inputBox: {
    flex:1,
    backgroundColor: 'black',
    alignItems:"center",
    justifyContent:"center",
  },
  Box1: {
    borderWidth: 2,
    backgroundColor: '#1A1A1A',
    height: 110,
    width: 320,
    marginHorizontal: 10,
    borderRadius: 20,
    marginVertical: 20,
  },
  inputHeader: {
    flex: 2,
    //backgroundColor:"teal",
    paddingTop: 10,
  },
  inputDisplay: {
    flex: 2,
    // backgroundColor:"pink"
    paddingBottom: 15,
  },
  button: {
    backgroundColor: 'blue', // Default button background color
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width:150,
  },
  text: {
    color: 'white', // Default text color
    fontSize: 16,
  },
});
