// @ts-ignore
// @flow
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { HomeScreen, StartScreen } from './src/screens';

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
