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
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#367F53',
        height: 100,
      },
      headerTintColor: '#fff',
    },
  },
);

export default () => <RootStack />;
