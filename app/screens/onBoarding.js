/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const done = ({...props}) => (
    <TouchableOpacity style={styles.button} {...props}>
        <Text style={styles.text}> Done </Text>
    </TouchableOpacity>

);

const onBoarding = ({navigation}) => {
        return (
            <Onboarding
            DoneButtonComponent={done}
            onSkip={() => navigation.replace('login')}
            onDone={() => navigation.navigate('login')}
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Image source={require('../assets/Image/onboard01.jpg')} style={styles.image}/>,
                        title: 'Search Donors',
                        subtitle: 'Anyone can search donors.',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={require('../assets/Image/onboard02.jpg')} style={styles.image}/>,
                        title: 'Find Donors Quickly',
                        subtitle: 'Anyone can find donors.',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={require('../assets/Image/onboard03.jpg')} style={styles.image} />,
                        title: 'Save a Life',
                        subtitle: 'Find Blood save a life.',
                    },
                ]}
            />
    );
};
export default onBoarding;

const styles = StyleSheet.create({
    image: {
      width: 360,
      height: 300,
    },
    button: {
      marginHorizontal: 17,
    },
    text: {
        fontSize: 16,
        color:'#000',
    },
  });
