import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from "./views/Login";
import Home from "./views/Home";
import Register from "./views/Register";
import ForgotPass from "./views/ForgotPass";
import ResetPass from "./views/ResetPass";
import Everest from "./views/Everest";
import Alps from "./views/Alps";
import Himalayas from "./views/Himalayas";
import ResetEmail from "./views/ResetEmail";




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode = "none">
        <Stack.Screen name = "Login" component = {Login}></Stack.Screen>
        <Stack.Screen name = "Home" component = {Home}></Stack.Screen>
        <Stack.Screen name = "Register" component = {Register}></Stack.Screen>
        <Stack.Screen name = "ForgotPass" component = {ForgotPass}></Stack.Screen>
        <Stack.Screen name = "ResetPass" component = {ResetPass}></Stack.Screen>
        <Stack.Screen name = "Everest" component = {Everest}></Stack.Screen>
        <Stack.Screen name = "Alps" component = {Alps}></Stack.Screen>
        <Stack.Screen name = "Himalayas" component = {Himalayas}></Stack.Screen>
        <Stack.Screen name = "ResetEmail" component = {ResetEmail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

