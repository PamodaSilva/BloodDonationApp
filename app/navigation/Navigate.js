/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import login from '../screens/login';
import resetPassword from '../screens/resetPassword';
import page01 from '../screens/page01';
import Donor01 from '../screens/Donor1';
import Donor02 from '../screens/Donor2';
import Finder from '../screens/Finder';
import BottomNavigation from '../navigation/TabNavigation';

const PrimaryNavigator = createStackNavigator();
class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <PrimaryNavigator.Navigator headerMode={{}} initialRouteName="Home">
                    <PrimaryNavigator.Screen name="Home" component={Home}/>
                    <PrimaryNavigator.Screen name="login" component={login}/>
                    <PrimaryNavigator.Screen name="resetPassword" component={resetPassword}/>
                    <PrimaryNavigator.Screen name="page01" component={page01}/>
                    <PrimaryNavigator.Screen name="Donor01" component={Donor01}/>
                    <PrimaryNavigator.Screen name="Donor02" component={Donor02}/>
                    <PrimaryNavigator.Screen name="Finder" component={Finder}/>
                    <PrimaryNavigator.Screen name="BottomNavigation" component={BottomNavigation}/>
                </PrimaryNavigator.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;
