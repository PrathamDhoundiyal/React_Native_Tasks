import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

/* Creating a Child Component
Passing Props
btnColor-->Background color of btn
btnText-->Text on the btn
btnTextColor-->Text color of the btn
onPressFunc-->Sets which func called on pressing the Custom btn
*/

export default function CustomBtn({
  btnColor,
  btnText,
  btnTextColor,
  onPressFunc,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: btnColor}]}
      onPress={onPressFunc}>
      <Text style={[styles.Text,{color:btnTextColor}]}>{btnText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button:{
    height:65,
    width:65,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:40,
    marginLeft:15,
  },
  Text:{
    fontSize:22,
    fontWeight:"bold",
  }
});