/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class profile extends Component {
  constructor() {
    super();
  }

  render(){
    return (
      <View>
        <View style={styles.view1}>
          <Text style={styles.text1}> Profile </Text>
        </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  view1:{
    alignItems: 'center',
  },
  text1: {
    fontSize: 35,
    marginTop: 50,
    textAlign: 'center',
    color: '#000',
  },
});
