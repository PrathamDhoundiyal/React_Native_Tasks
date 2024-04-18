import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  
  export default function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
  
    const onButtonPress = value => {
      if (value == '=') {
        try {
          setResult(eval(input));
        } catch (error) {
          setResult('error');
        }
      } else if (value === 'C') {
        setInput('');
        setResult('');
      } else {
        setInput(input + value);
      }
    };
  
    const buttonTextColor = value => {
      if (value === 'C' || value === '=') {
        return 'red';
      } else if (
        value === '/' ||
        value === '*' ||
        value === '-' ||
        value === '+'
      ) {
        return 'green';
      } else {
        return 'white';
      }
    };
  
    return (
      <View style={styles.container}>
        <View
          style={{
            height: '25%',
            backgroundColor: '#333333',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            borderBottomWidth: 0.3,
            borderBottomColor: 'white',
          }}>
          <Text style={styles.resultText}>{result}</Text>
        </View>
  
        <View
          style={{
            height: '25%',
            backgroundColor: '#333333',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            borderBottomWidth: 0.3,
            borderBottomColor: 'white',
          }}>
          <TextInput
            style={styles.inputText}
            value={input}
            onChange={setInput}
            keyboardType="numeric"
            multiline={true}
            numberOfLines={5}
          />
        </View>
  
        <View
          style={{
            height: '50%',
            flexWrap: 'wrap',
            flexDirection: 'row',
            backgroundColor: '#333333',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            paddingTop: 10,
          }}>
          {[
            '7',
            '8',
            '9',
            '/',
            '4',
            '5',
            '6',
            '*',
            '1',
            '2',
            '3',
            '-',
            '0',
            'C',
            '=',
            '+',
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.button]}
              onPress={() => onButtonPress(item)}>
              <Text
                style={{
                  fontSize: 24,
                  color: buttonTextColor(item),
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
    },
    resultsContainer: {
      height: '25%',
      justifyContent: 'center',
      alignItems: 'flex-end',
      backgroundColor: 'white',
    },
    resultText: {
      fontSize: 40,
      color: 'black',
    },
  
    inputContainer: {
      height: '10%',
      justifyContent: 'center',
      alignItems: 'flex-end',
      backgroundColor: 'white',
    },
    inputText: {
      fontSize: 30,
      color: 'black',
      width: '95%',
      backgroundColor: '#333333',
      textAlign: 'right',
    },
  
    buttonContainer: {
      paddingTop: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-end',
    },
    button: {
      fontSize: 24,
      width: '23%',
      height: '23%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      borderRadius: 25,
      margin: 1,
      elevation: 5,
      shadowColor: 'white',
    },
    buttontext: {
      fontSize: 24,
    },
  });
  