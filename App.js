// @ts-ignore
// @flow
import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import StartScreen from './src/screens/StartScreen';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Start: {
      screen: StartScreen,
    },
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default () => <RootStack />;
