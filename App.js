import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/home';
import PhyscialActivity from './screens/PhysicalActivity';
import MentalActivity from './screens/MentalActivity';
import Fluidsconsumed from './screens/Fluidsconsumed';
import WeightCheck from './screens/Weightcheck';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

const Stack=createStackNavigator()
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Home" component={HomeScreen}/> 
        <Stack.Screen name="PhysicalActivity" component={PhyscialActivity}/> 
        <Stack.Screen name="MentalActivity" component={MentalActivity}/> 
        <Stack.Screen name="FluidsConsumed" component={Fluidsconsumed}/> 
        <Stack.Screen name="WeightCheck" component={WeightCheck}/> 

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;