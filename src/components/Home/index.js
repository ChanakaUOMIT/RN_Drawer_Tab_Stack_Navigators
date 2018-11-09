import React from 'react';
// import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import Home from './HomeScreen/Home';
import Paymnet from '../Payment/Payment';
import Map from '../Map/Map';

const HomeTabs = createMaterialTopTabNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
            tabBarLabel:"Home",
            tabBarIcon:({ tintColor }) =>(
                <FAIcon 
                    name="home"
                    size={17}
                    color={tintColor}
                />
            )
        }
    },

    Payment:{
        screen:Paymnet,
        navigationOptions:{
            tabBarLabel:"Payment",
            tabBarIcon:({ tintColor }) =>(
                <MIcon 
                    name="payment"
                    size={17}
                    color={ tintColor}
                />
            )
        }
    },

    Place:{
        screen:Map,
        navigationOptions:{
            tabBarLabel:"Map",
            tabBarIcon:({ tintColor }) => (
                <MIcon 
                    name="place"
                    size={17}
                    color={tintColor}
                />
            )
        }
    }


},{
    initialRouteName:'Home',
    // order:['Payment', 'Home'],
    tabBarPosition:'bottom',
    tabBarOptions:{
        showIcon:true,
        activeTintColor:'orange',
        inactiveTintColor:'grey',
        // showIcon:true,
        style:{
            backgroundColor:'#f2f2f2'
        },
        indicatorStyle:{
            height:0
        },
        // showIcon:true
    }
});

export default createStackNavigator({HomeTabs}, { headerMode: "none"});