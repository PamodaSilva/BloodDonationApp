/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import root from '../root';
import login from '../screens/login';

const PrimaryNavigator = createStackNavigator();

class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <PrimaryNavigator.Navigator headerMode={{}} initialRouteName="root"> 
                    <PrimaryNavigator.Screen name="root" component={root}/>
                    <PrimaryNavigator.Screen name="login" component={login}/>
                </PrimaryNavigator.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;
