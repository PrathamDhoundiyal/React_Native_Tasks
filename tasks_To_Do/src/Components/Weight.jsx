import {StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

// Temperature Convertor Component
export default function Weight() {
    const [inputWeight, setInputWeight] = useState('');
    const [outputWeight, setOutputWeight] = useState('');
    const [inputUnit, setInputUnit] = useState('Kg');
    const [outputUnit, setOutputUnit] = useState('g');

    const convertWeight = () => {
        const weight = parseFloat(inputWeight);
        let convertedWeight;
    
        if (inputUnit === 'Kg') {
          if (outputUnit === 'g') {
            convertedWeight = weight * 1000;
          } else if (outputUnit === 'mg') {
            convertedWeight = weight * 1000000;
          }
        } else if (inputUnit === 'g') {
          if (outputUnit === 'Kg') {
            convertedWeight = weight / 1000;
          } else if (outputUnit === 'mg') {
            convertedWeight = weight * 1000;
          }
        } else if (inputUnit === 'mg') {
          if (outputUnit === 'Kg') {
            convertedWeight = weight / 1000000;
          } else if (outputUnit === 'g') {
            convertedWeight = weight / 1000;
          }
        }
    
        setOutputWeight(convertedWeight.toFixed(2));
      };



  return (
    <View style={styles.mainBox}>
      

      <View style={styles.inputBox}>
      <Text style={styles.title}> Weight Converter </Text>
        <View style={styles.Box1}>
          <View style={styles.inputHeader}>
          <Picker
          selectedValue={inputUnit}
          style={styles.picker}
          onValueChange={(itemValue) => setInputUnit(itemValue)}>
          <Picker.Item label="Kg" value="Kg" />
          <Picker.Item label="g" value="g" />
          <Picker.Item label="mg" value="mg" />
        </Picker>
          </View>
          <View style={styles.inputDisplay}>
          <TextInput
          style={styles.input}
          placeholder="Enter Weight"
          keyboardType="numeric"
          value={inputWeight}
          onChangeText={(text) => setInputWeight(text)}
        />
          </View>
        </View>

        <View style={styles.Box1}>
          <View style={styles.inputHeader}>
          <Picker
          selectedValue={outputUnit}
          style={styles.picker}
          onValueChange={(itemValue) => setOutputUnit(itemValue)}>
          <Picker.Item label="Kg" value="Kg" />
          <Picker.Item label="g" value="g" />
          <Picker.Item label="mg" value="mg" />
        </Picker>
          </View>
          <View style={styles.inputDisplay}>
          <TextInput
          style={styles.input}
          placeholder="Result"
          editable={false}
          value={outputWeight}
        />
          </View>
        </View>
        <TouchableOpacity onPress={convertWeight} style={[styles.button]}>
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
    paddingTop: 10,
  },
  inputDisplay: {
    flex: 2,
    paddingBottom: 15,
  },
  Box2: {},
  button: {
    backgroundColor: 'blue', 
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width:150,
  },
  text: {
    color: 'white', 
    fontSize: 16,
  },
});

