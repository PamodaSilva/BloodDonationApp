/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import SignIn from '../components/signin';
import Account from '../components/account';

export default class Donor1 extends Component {
  constructor() {
    super();
  }

  render(){
    return (
      <View>
        <SignIn/>
        <View style={styles.view1}>
            <TextInput style={styles.input}
              placeholder="Name"
              onChangeText = {this.handleName}/>
            <TextInput style={styles.input}
              placeholder="City"
              onChangeText = {this.handleCity}/>
            <TextInput style={styles.input}
              placeholder="Blood Type"
              onChangeText = {this.handleBloodType}/>
            <TextInput style={styles.input}
              placeholder="NIC"
              onChangeText = {this.handleNIC}/>
            <TextInput style={styles.input}
              placeholder="Blood Bank ID"
              onChangeText = {this.handleBloodBankID}/>
        </View>
        <Text style={styles.text1}> *If you have </Text>
        <TouchableOpacity style={styles.button} onPress ={this.onPressNext}>
          <Text style={styles.text2}> Next </Text>
        </TouchableOpacity>
        <Account/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text1:{
    marginLeft: 80,
  },
  view1: {
    marginTop: 30,
    alignItems: 'center',
  },
  input: {
    fontSize: 20,
    borderWidth: 3,
    borderRadius:30,
    margin:8,
    width: 320,
    textAlign: 'center',
  },
  button: {
    borderWidth: 3,
    borderRadius:30,
    margin:7,
    width: 320,
    backgroundColor: '#F67676',
    marginLeft: 45,
  },
  text2: {
    fontSize: 25,
    textAlign: 'center',
    margin: 4,
    color: '#000',
  },
  });
