import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import CustomBtn from './Custombtn';
import Switch_theme from './Switch_theme';
import {ThemeContext} from './themeContext';

export default function CalculatorApp() {
  const {dark} = useContext(ThemeContext);
  const [input, setInput] = useState(''); // behaves like  a global variable
  const [result, setResult] = useState('');

  const handleButtonPress = value => {
    if (value === '=') {
      try {
        const evalResult = eval(input);
        setResult(evalResult.toString());
        setInput('');
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'AC') {
      setInput('');
      setResult('');
    } else if (value === '⌫') {
      if (input.length > 0) {
        setInput(input.slice(0, -1));
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <View style={styles.mainBox}>
      <View
        style={[styles.topSection, dark ? styles.topDark : styles.topLight]}>
        <View style={styles.inputBox}>
          <Switch_theme />
          <Text
            style={[
              styles.inputText,
              dark ? styles.inputTextDark : styles.inputTextLight,
            ]}>
            {input}
          </Text>
        </View>

        <View style={styles.resultBox}>
          <Text
            style={[
              styles.resultText,
              dark ? styles.resultTextDark : styles.resultTextLight,
            ]}>
            {result}
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.bottomSection,
          dark ? styles.bottomDark : styles.bottomLight,
        ]}>
        <View style={styles.btnRow}>
          <CustomBtn
            btnColor="#D4D4D2"
            btnText="AC"
            btnTextColor="#050505"
            onPressFunc={() => handleButtonPress('AC')}
          />
          <CustomBtn
            btnColor="#D4D4D2"
            btnText="%"
            btnTextColor="#050505"
            onPressFunc={() => handleButtonPress('%')}
          />
          <CustomBtn
            btnColor="#D4D4D2"
            btnText="⌫ "
            btnTextColor="#050505"
            onPressFunc={() => handleButtonPress('⌫')}
          />
          <CustomBtn
            btnColor="#FF9500"
            btnText="÷"
            btnTextColor="#FFFCF7"
            onPressFunc={() => handleButtonPress('/')}
          />

          <CustomBtn
            btnColor="#505050"
            btnText="7"
            btnTextColor={dark ? '#C8C8C8' : '#FCFCFC'}
            onPressFunc={() => handleButtonPress('7')}
          />
          <CustomBtn
            btnColor="#505050"
            btnText="8"
            btnTextColor={dark ? '#C8C8C8' : '#FCFCFC'}
            onPressFunc={() => handleButtonPress('8')}
          />
          <CustomBtn
            btnColor="#505050"
            btnText="9"
            btnTextColor={dark ? '#C8C8C8' : '#FCFCFC'}
            onPressFunc={() => handleButtonPress('9')}
          />
          <CustomBtn
            btnColor="#FF9500"
            btnText="×"
            btnTextColor="#FFFCF7"
            onPressFunc={() => handleButtonPress('*')}
          />

          <CustomBtn
            btnColor="#505050"
            btnText="4"
            btnTextColor={dark ? '#C8C8C8' : '#FCFCFC'}
            onPressFunc={() => handleButtonPress('4')}
          />
          <CustomBtn
            btnColor="#505050"
            btnText="5"
            btnTextColor={dark ? '#C8C8C8' : '#FCFCFC'}
            onPressFunc={() => handleButtonPress('5')}
          />
          <CustomBtn
            btnColor="#505050"
            btnText="6"
            btnTextColor={dark ? '#C8C8C8' : '#FCFCFC'}
            onPressFunc={() => handleButtonPress('6')}
          />
          <CustomBtn
            btnColor="#FF9500"
            btnText="-"
            btnTextColor="#FFFCF7"
            onPressFunc={() => handleButtonPress('-')}
          />

          <CustomBtn
            btnColor="#505050"
            btnText="1"
            btnTextColor={dark ? '#C8C8C8' : '#FCFCFC'}
            onPressFunc={() => handleButtonPress('1')}
          />
          <CustomBtn
            btnColor="#505050"
            btnText="2"
            btnTextColor={dark ? '#C8C8C8' : '#FCFCFC'}
            onPressFunc={() => handleButtonPress('2')}
          />
          <CustomBtn
            btnColor="#505050"
            btnText="3"
            btnTextColor={dark ? '#C8C8C8' : '#FCFCFC'}
            onPressFunc={() => handleButtonPress('3')}
          />
          <CustomBtn
            btnColor="#FF9500"
            btnText="+"
            btnTextColor="#FFFCF7"
            onPressFunc={() => handleButtonPress('+')}
          />

          <CustomBtn
            btnColor="#505050"
            btnText="00"
            btnTextColor={dark ? '#C8C8C8' : '#FCFCFC'}
            onPressFunc={() => handleButtonPress('00')}
          />
          <CustomBtn
            btnColor="#505050"
            btnText="0"
            btnTextColor={dark ? '#C8C8C8' : '#FCFCFC'}
            onPressFunc={() => handleButtonPress('0')}
          />
          <CustomBtn
            btnColor="#505050"
            btnText="."
            btnTextColor={dark ? '#C8C8C8' : '#FCFCFC'}
            onPressFunc={() => handleButtonPress('.')}
          />
          <CustomBtn
            btnColor="#FF9500"
            btnText="="
            btnTextColor="#FFFCF7"
            onPressFunc={() => handleButtonPress('=')}
          />
        </View>
      </View>
    </View>
  );
}
// Cannot apply ternary Operation here
const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    backgroundColor: 'black',
  },
  topSection: {
    flex: 2,
    //flex:1,
  },
  topDark: {
    backgroundColor: '#232D36',
  },
  topLight: {
    backgroundColor: '#F7F8FB',
  },
  bottomSection: {
    flex: 3,
    //flex:2,
  },
  bottomDark: {
    backgroundColor: '#25313D',
  },
  bottomLight: {
    backgroundColor: '#e3e9ef',
  },
  btnRow: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 15,
    marginVertical: 10,
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  inputBox: {
    flex: 4,
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  resultBox: {
    flex: 2,
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  resultText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  resultTextDark: {
    color: 'white',
  },
  resultTextLight: {
    color: 'black',
  },
  inputText: {
    fontSize: 25,
    paddingTop: 80,
  },
  inputTextDark: {
    color: 'white',
  },
  inputTextLight: {
    color: 'black',
  },
});
