import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LogInScreen from '../screens/LogInScreen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShadowVisible:false
      }}>
        <Stack.Screen name="welcomeScreen" component={WelcomeScreen} options={{
            headerShown: false,
        }} />
        <Stack.Screen name="registerScreen" component={RegisterScreen} options={{
            headerShown: false,
        }} />
        <Stack.Screen name="loginScreen" component={LogInScreen} options={{
          title: ''
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;