import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../containers/signin';
import Signup from '../containers/signup';
import Splash from '../containers/splash';

const AuthenticationStack = createStackNavigator();

const AuthenticationScreens = () => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#ffffff',
        },
      }}>
      <AuthenticationStack.Screen name="Splash" component={Splash} />
      <AuthenticationStack.Screen name="Signup" component={Signup} />
      <AuthenticationStack.Screen name="Signin" component={Signin} />
    </AuthenticationStack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AuthenticationScreens />
    </NavigationContainer>
  );
};

export default AppNavigation;
