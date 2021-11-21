/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class page01 extends Component {
  constructor() {
    super();
  }

  onPressDonor = () => {
    this.props.navigation.navigate('Donor01');
  }

  onPressFinder = () => {
    this.props.navigation.navigate('Finder');
  }

  render(){
    return (
      <View>
        <View style={styles.view1}>
          <Image source={require('../assets/Image/pic8.png')} />
        </View>
        <Text style={styles.text1}> Are you ? </Text>
        <View style={styles.view2}>
          <TouchableOpacity style={styles.button} onPress={this.onPressDonor}>
            <Text style={styles.text2}> Donor </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPressFinder}>
            <Text style={styles.text2}> Blood Finder </Text>
          </TouchableOpacity>
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
  view2: {
    marginTop: 40,
  },
  button: {
    borderWidth: 3,
    borderRadius:30,
    margin: 20,
    width: 320,
    backgroundColor: '#F67676',
    marginLeft: 45,
  },
  text2: {
    fontSize: 25,
    textAlign: 'center',
    margin: 7,
    color: '#000',
  },
});
