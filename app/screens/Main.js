/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import Tabs from '../navigation/TabNavigation';
import {NavigationContainer} from '@react-navigation/native';

export default class Main extends Component {
    render(){
        return (
            <NavigationContainer>
                <Tabs/>
            </NavigationContainer>
        );
    }
}
