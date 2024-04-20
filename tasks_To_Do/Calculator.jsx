import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import CustomBtn from './Custombtn';

export default function Calculator() {

 const[input,setInput]=useState('');
 const[result,setResult]=useState('');

 const handleButtonPress = (value) => {
  if (value === '=') {
    // Evaluate the expression and update the result
    try {
      const evalResult = eval(input);
      setResult(evalResult.toString());
      setInput('');
    } catch (error) {
      setResult('Error');
    }
  } else if (value === 'AC') {
    // Clear the input and result
    setInput('');
    setResult('');
  } else if (value === '⌫') {
    // Delete the last character from input
    setInput(input.slice(0, -1));
  } else {
    // Append the pressed button value to input
    setInput(input + value);
  }
};


  return (
    <View style={styles.mainBox}>
      <View style={styles.topSection}>

      <View style={styles.inputBox}>
    <Text  style={styles.inputText}>{input}</Text>      
      </View>

      <View style={styles.resultBox}>
                 <Text style={styles.resultText}>{result}</Text>
      </View>


      </View>

      <View style={styles.bottomSection}>
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
            onPressFunc={() => handleButtonPress('AC')}
          />
          <CustomBtn
            btnColor="#FF9500"
            btnText="÷"
            btnTextColor="#FFFCF7"
            onPressFunc={() => handleButtonPress('/')}
          />
        </View>

        <View style={styles.btnRow}>
 
 <CustomBtn
            btnColor="#505050"
            btnText="7"
            btnTextColor="#C8C8C8"
            onPressFunc={() => handleButtonPress('7')}
          />
          <CustomBtn
            btnColor="#505050"
            btnText="8"
            btnTextColor="#C8C8C8"
            onPressFunc={() => handleButtonPress('8')}
          />
          <CustomBtn
            btnColor="#505050"
            btnText="9"
            btnTextColor="#C8C8C8"
            onPressFunc={() => handleButtonPress('9')}
          />
          <CustomBtn
            btnColor="#FF9500"
            btnText="×"
            btnTextColor="#FFFCF7"
            onPressFunc={() => handleButtonPress('*')}
          />

 </View>

        <View style={styles.btnRow}>
          <CustomBtn
            btnColor="#505050"
            btnText="4"
            btnTextColor="#C8C8C8"
            onPressFunc={() => handleButtonPress('4')}
          />
          <CustomBtn
            btnColor="#505050"
            btnText="5"
            btnTextColor="#C8C8C8"
            onPressFunc={() => handleButtonPress('5')}
          />
          <CustomBtn
            btnColor="#505050"
            btnText="6"
            btnTextColor="#C8C8C8"
            onPressFunc={() => handleButtonPress('6')}
          />
          <CustomBtn
            btnColor="#FF9500"
            btnText="-"
            btnTextColor="#FFFCF7"
            onPressFunc={() => handleButtonPress('-')}
          />
        </View>

 <View style={styles.btnRow}>
 
 <CustomBtn
            btnColor="#505050"
            btnText="1"
            btnTextColor="#C8C8C8"
            onPressFunc={() => handleButtonPress('1')}
          />
          <CustomBtn
            btnColor="#505050"
            btnText="2"
            btnTextColor="#C8C8C8"
            onPressFunc={() => handleButtonPress('2')}
          />
          <CustomBtn
            btnColor="#505050"
            btnText="3"
            btnTextColor="#C8C8C8"
            onPressFunc={() => handleButtonPress('3')}
          />
          <CustomBtn
            btnColor="#FF9500"
            btnText="+"
            btnTextColor="#FFFCF7"
            onPressFunc={() => handleButtonPress('+')}
          />

 </View>

 <View style={styles.btnRow}>
 
 <CustomBtn
            btnColor="#505050"
            btnText="00"
            btnTextColor="#C8C8C8"
            onPressFunc={() => handleButtonPress('00')}
          />
          <CustomBtn
            btnColor="#505050"
            btnText="0"
            btnTextColor="#C8C8C8"
            onPressFunc={() => handleButtonPress('0')}
          />
          <CustomBtn
            btnColor="#505050"
            btnText="."
            btnTextColor="#C8C8C8"
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

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    backgroundColor: 'black',
  },
  topSection: {
    flex: 1,
    backgroundColor: '#232D36',
  },
  bottomSection: {
    flex: 2,
    backgroundColor: '#25313D',
  },
  btnRow: {
    flexDirection: 'row',
    margin:13,
  },
  inputBox:{
    flex:4, alignItems:"flex-end",
    paddingRight:20,
  },
  resultBox:{
    flex:2,
    alignItems:"flex-end",
    paddingRight:20,
  },
  resultText:{
     fontSize:30,
     fontWeight:"bold",
  },
  inputText:{
    fontSize:30,
    paddingTop:80,
  }
});
