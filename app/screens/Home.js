/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Button} from 'react-native';

export default class Home extends Component {
  constructor() {
    super();
  }

  onPressLogin = () => {
    this.props.navigation.navigate('login');
  }

  render() {
    return (
      <View style={styles.fullView}>
        <View style={styles.view2}>
          <Text style={styles.text1}> Blood Donation App </Text>
          <Text style={styles.text2}> Save Life </Text>
        </View>
        <View style={styles.view3}>
          <Image source={require('../assets/Image/logo1.png')} />
        </View>
        <View style={styles.button}>
          <Button title="Login"
            onPress={this.onPressLogin}/>
        </View>
        <View style={styles.view4}>
          <Image source={require('../assets/Image/pic1.png')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fullView: {
    alignItems: 'center',
  },
  view2: {
    marginTop: 70,
  },
  text1: {
    fontSize: 25,
    textAlign: 'center',
  },
  text2: {
    fontSize: 20,
    textAlign: 'center',
  },
  view3: {
    marginTop:85,
    marginBottom: 80,
  },
  button: {
      width: 90,
      marginBottom: 10,
  },
  view4: {
    alignItems: 'center',
    width: 400,
},
});
