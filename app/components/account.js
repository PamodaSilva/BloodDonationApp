/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';

export default class Donor1 extends Component {
  constructor() {
    super();
  }

  render(){
      return (
        <View>
            <Text style={styles.text1}> Do You have an Account ? </Text>
            <TouchableOpacity style={styles.register} >
                <Text style={styles.text2}> Sign In </Text>
            </TouchableOpacity>
        </View>
      );
  }
}

const styles = StyleSheet.create({
    text2: {
        fontSize: 20,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    register: {
        alignItems: 'center',
    },
    text1: {
        fontSize: 22,
        textAlign: 'center',
        margin: 10,
        color: '#000',
        marginTop: 35,
    },
});
