/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {TextInput, View, StyleSheet, Image, TouchableOpacity, Text, ScrollView, Alert} from 'react-native';

export default class DonorFinder extends Component {
  constructor() {
    super();
  }

  state = {
    bloodType: '',
    city: '',
  }

  handleBloodType = (text) => {
    this.setState({ bloodType: text });
  }
  handleCity = (text) => {
    this.setState({ city: text });
  }

  onPressNext = (bloodType, city) => {
    if (!city && !bloodType){
      Alert.alert(' Error!..', 'Some information is not filled out !!', [
        {text: 'ok.'},
      ]);
    }
  }

  render(){
    return (
      <ScrollView>
        <View style={styles.view1}>
          <Image source={require('../assets/Image/pic5.png')} />
        </View>
        <View style={styles.view2}>
            <TextInput style={styles.input}
            placeholder="Blood Type"
            onChangeText = {this.handleBloodType}/>
            <TextInput style={styles.input}
            placeholder="City"
            onChangeText = {this.handleCity}/>
        </View>
        <TouchableOpacity style={styles.button} onPress ={
          () => this.onPressNext(this.state.bloodType, this.state.city)}>
          <Text style={styles.text1}> Ok </Text>
        </TouchableOpacity>
      </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  view1:{
    alignItems: 'center',
  },
  view2: {
    marginTop: 20,
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    borderWidth: 1.5,
    borderRadius:30,
    margin:11,
    width: 320,
    textAlign: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius:30,
    margin:10,
    width: 320,
    backgroundColor: '#F67676',
    marginLeft: 45,
  },
  text1: {
    fontSize: 22,
    textAlign: 'center',
    margin: 5,
    color: '#000',
  },
});
