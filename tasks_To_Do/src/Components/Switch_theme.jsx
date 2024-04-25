import { StyleSheet, Text, View,} from 'react-native'
import React, { useContext, } from 'react'
import { ThemeContext } from './themeContext';
import SwitchWithIcons from "react-native-switch-with-icons";
import { Icons } from '../assets';

export default function Switch_theme() {
  const{dark,setDark}=useContext(ThemeContext);
  
  return (
    <View style={styles.switchContainer}>
      <SwitchWithIcons value={dark} onValueChange={()=>setDark(!dark)}
        thumbColor={dark?"white":"black"} trackColor={{true:"white",false:"black"}} 
      icon={{true: Icons.light, false:Icons.dark}}
      iconColor={{true:"black",false:"white"}} />
    </View>
  )
}
const styles = StyleSheet.create({
  switchContainer:{
    paddingTop:10,
  }
})

