/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Donor1 extends Component {
  constructor() {
    super();
  }

  render(){
      return (
        <View>
            <Text style={styles.text1}> Sign Up </Text>
            <Text style={styles.text2}> Add your details to Sign Up </Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
    text1: {
        fontSize: 35,
        marginTop: 40,
        textAlign: 'center',
        color: '#000',
    },
    text2: {
        fontSize: 18,
        textAlign: 'center',
        color: '#000',
        marginTop: 10,
    },
  });
