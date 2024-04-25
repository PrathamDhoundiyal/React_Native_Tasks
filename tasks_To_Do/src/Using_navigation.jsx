
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ThemeContextProvider, {
  ThemeContext,
} from './Components/themeContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';


import CalculatorApp from './Components/Calculator';
import Temp from './Components/Temp';
import Weight from './Components/Weight';

const Tab = createMaterialTopTabNavigator();

export default function Using_navigation() {
  return (
    <ThemeContextProvider>
      <NavigationContainer>
        <Tab.Navigator
           screenOptions={{
            showIcon: true,
            tabBarActiveTintColor: 'red', 
            tabBarInactiveTintColor: 'grey', 
            tabBarShowIcon:true,
            tabBarIndicatorStyle: {
              backgroundColor: 'teal', 
            },
            tabBarStyle: {
              backgroundColor: '#D4D4D2', 
            },
          }}>
          <Tab.Screen name="Calculator" component={CalculatorApp} options={{tabBarIcon:()=>(
            <Ionicons name="calculator" size={25} color="black" />
          ),
          tabBarShowLabel: false
        }}/>
          <Tab.Screen name="Temperature" component={Temp} options={{tabBarIcon:()=>(
            <FontAwesome6 name="temperature-half" size={23} color="black" />
          ),
          tabBarShowLabel: false
        }}/>
            <Tab.Screen name="Weight" component={Weight} options={{tabBarIcon:()=>(
            <FontAwesome6 name="weight-scale" size={23} color="black" />
          ),
          tabBarShowLabel: false
        }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeContextProvider>
  );
}

