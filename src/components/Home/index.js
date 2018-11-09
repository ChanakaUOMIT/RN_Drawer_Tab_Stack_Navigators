import React from 'react';
// import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from './HomeScreen/Home';
import Paymnet from '../Payment/Payment';

const HomeTabs = createMaterialTopTabNavigator({
    Home:{
        screen:Home,
    },

    Payment:{
        screen:Paymnet
    },


},{
    initialRouteName:'Home',
    tabBarPosition:'bottom',
    tabBarOptions:{
        activeTintColor:'orange',
        inactiveTintColor:'grey',
        style:{
            backgroundColor:'#f2f2f2'
        },
        indicatorStyle:{
            height:0
        },
        showIcon:true
    }
});

export default createStackNavigator({HomeTabs}, { headerMode: "none"});