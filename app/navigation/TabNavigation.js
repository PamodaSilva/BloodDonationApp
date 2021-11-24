/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../screens/DonorSearch';
import Amount from '../screens/Amount';
import About from '../screens/About';
import profile from '../screens/profile';

const Tab = createBottomTabNavigator();

class App extends Component {
    render() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    showLabel: false,
                    style : {
                        position: 'absolute',
                        borderRadius: 20,
                        bottom: 5,
                        left: 20,
                        right: 20,
                        height: 85,
                    },
                }}
            >
                <Tab.Screen name="Search" component={Search} options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top:5}}>
                            <Image source={require('../assets/Image/pic9.jpg')}
                            style={{
                                width: 55,
                                height: 50,
                                borderWidth: 1.5,
                                borderColor: focused? 'red' : 'black'
                            }}/>
                            <Text style={{color: focused? 'red' : 'black',fontSize: 12,}}>
                                Search
                            </Text>
                        </View>
                    ),
                }}/>
                <Tab.Screen name="Amount" component={Amount} options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top:5}}>
                            <Image source={require('../assets/Image/pic10.jpg')}
                            style={{
                                width: 55,
                                height: 50,
                                borderWidth: 1.5,
                                borderColor: focused? 'red' : 'black'
                            }}/>
                            <Text style={{color: focused? 'red' : 'black',fontSize: 12,}}>
                                Amount
                            </Text>
                        </View>
                    ),
                }}/>
                <Tab.Screen name="About" component={About} options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top:5}}>
                            <Image source={require('../assets/Image/pic11.jpg')}
                            style={{
                                width: 55,
                                height: 50,
                                borderWidth: 1.5,
                                borderColor: focused? 'red' : 'black'
                            }}/>
                            <Text style={{color: focused? 'red' : 'black',fontSize: 12,}}>
                                About
                            </Text>
                        </View>
                    ),
                }}/>
                <Tab.Screen name="profile" component={profile} options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top:5}}>
                            <Image source={require('../assets/Image/pic12.jpg')}
                            style={{
                                width: 55,
                                height: 50,
                                borderWidth: 1.5,
                                borderColor: focused? 'red' : 'black'
                            }}/>
                            <Text style={{color: focused? 'red' : 'black',fontSize: 12,}}>
                                My Profile
                            </Text>
                        </View>
                    ),
                }}/>
            </Tab.Navigator>
        );
    }
}

export default App;
