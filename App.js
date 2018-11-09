import React from 'react'
import { createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from './src/components/Home';
// import Settings from './Settings';  //Tab Nav
// import Profile from './Profile'; //Stack Nav

export default createDrawerNavigator({
  Home:{
    screen:Home,
  }
});