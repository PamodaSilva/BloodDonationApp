/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Button} from 'react-native';

export default class login extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.fullView}>
          <Text style={styles.text1}> Blood Donation App </Text>
          <Text style={styles.text2}> Save Life </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fullView: {
    alignItems: 'center',
    backgroundColor: 'green',
  },
});
