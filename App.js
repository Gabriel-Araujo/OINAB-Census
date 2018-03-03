// @ts-ignore
// @flow
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { HomeScreen, StartScreen, SurveyScreen, AboutScreen } from './src/screens';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Start: {
      screen: StartScreen,
    },
    Survey: {
      screen: SurveyScreen,
    },
    About: {
      screen: AboutScreen,
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#054D44',
        height: 100,
      },
      headerTintColor: '#fff',
    },
  },
);

export default () => <RootStack />;
