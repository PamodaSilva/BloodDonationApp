/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert} from 'react-native';
import SignIn from '../components/signin';
import Account from '../components/account';

export default class finder extends Component {
  constructor() {
    super();
  }

  state = {
    password: '',
    RePassword: '',
  }
  handlePw = (text) => {
    this.setState({ password: text });
  }
  handleRePw = (text) => {
    this.setState({ RePassword: text });
  }

  pressSetPassword = (pw, RePw) => {
    if (pw !== RePw){
      Alert.alert('Alert!..', ' Password Not Equal !!', [
        {text: 'ok.'},
      ]);
    } else {
        Alert.alert('Alert!..', ' Password Equal !!', [
            {text: 'ok.'},
        ]);
    }
  }

  render(){
    return (
      <ScrollView>
        <SignIn/>
        <View style={styles.view1}>
            <TextInput style={styles.input}
              placeholder="Name"
              onChangeText = {this.handleName}/>
            <TextInput style={styles.input}
              placeholder="City"
              onChangeText = {this.handleCity}/>
            <TextInput style={styles.input}
              placeholder="NIC"
              onChangeText = {this.handleNIC}/>
            <TextInput style={styles.input}
              placeholder="Telephone Number"
              onChangeText = {this.handleTel}/>
            <TextInput style={styles.input}
              placeholder="Password"
              onChangeText = {this.handlePw}
              secureTextEntry= {true}/>
            <TextInput style={styles.input}
              placeholder="Re-Type Password"
              onChangeText = {this.handleRePw}
              secureTextEntry= {true}/>
        </View>
        <TouchableOpacity style={styles.button} onPress ={
        () => this.pressSetPassword(this.state.password, this.state.RePassword)}>
          <Text style={styles.text1}> Register </Text>
        </TouchableOpacity>
        <Account/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  view1: {
    marginTop: 22,
    alignItems: 'center',
  },
  input: {
    fontSize: 19,
    borderWidth: 3,
    borderRadius:30,
    margin: 8,
    width: 320,
    textAlign: 'center',
  },
  button: {
    borderWidth: 3,
    borderRadius:30,
    margin:6,
    width: 320,
    backgroundColor: '#F67676',
    marginLeft: 45,
  },
  text1: {
    fontSize: 21,
    textAlign: 'center',
    margin: 5,
    color: '#000',
  },
  });
