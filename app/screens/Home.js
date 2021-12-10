/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

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
          <Image source={require('../assets/Image/logo1.jpg')} style={styles.image}/>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress ={this.onPressLogin}>
            <Text style={styles.text3}> LogIn </Text>
        </TouchableOpacity>
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
    backgroundColor: '#ffff',
  },
  view2: {
    marginTop: 70,
  },
  text1: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
  text2: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
  view3: {
    marginTop:50,
    marginBottom: 55,
  },
  image: {
    width: 120,
    height: 150,
  },
  button: {
    borderWidth: 2,
    margin:10,
    width: 120,
    backgroundColor: '#FFF',
  },
  text3: {
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
  view4: {
    alignItems: 'center',
    width: 400,
},
});
