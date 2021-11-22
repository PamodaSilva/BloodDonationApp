/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DonorSearch from '../screens/DonorSearch';
import Amount from '../screens/Amount';
import About from '../screens/About';
import profile from '../screens/profile';

const Tab = createBottomTabNavigator();

class App extends Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="DonorSearch" component={DonorSearch}/>
                <Tab.Screen name="Amount" component={Amount}/>
                <Tab.Screen name="About" component={About}/>
                <Tab.Screen name="profile" component={profile}/>
            </Tab.Navigator>

        );
    }
}

export default App;
