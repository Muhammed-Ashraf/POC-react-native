import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from './src/screens/Login/LoginScreen';

import HomeDrawerNavigator from './src/navigators/homeDrawerNavigator';

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Homes: HomeDrawerNavigator
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      header: null, //hide header if not needed so whole screen slide  

    },
  }
);
export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

