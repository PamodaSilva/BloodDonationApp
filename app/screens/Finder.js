/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert} from 'react-native';
import SignIn from '../components/signin';
import Firebase from '@react-native-firebase/app';

export default class finder extends Component {
  constructor() {
    super();
  }

  state = {
    name : '',
    city: '',
    NIC: '',
    TelPh: '',
    password: '',
    RePassword: '',
  }

  handleName = (text) => {
    this.setState({ name: text });
  }
  handleCity = (text) => {
    this.setState({ city: text });
  }
  handleNIC = (text) => {
    this.setState({ NIC: text });
  }
  handleRePw = (text) => {
    this.setState({ RePassword: text });
  }
  handlePw = (text) => {
    this.setState({ password: text });
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
        this.props.navigation.navigate('login');
    }
  }

  onPressSignIn = () => {
    this.props.navigation.navigate('login');
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
        <View>
          <Text style={styles.text2}> Do You have an Account ? </Text>
          <TouchableOpacity style={styles.register} onPress={this.onPressSignIn}>
            <Text style={styles.text3}> Sign In </Text>
          </TouchableOpacity>
        </View>
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
  text3: {
    fontSize: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  register: {
    alignItems: 'center',
  },
  text2: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
    color: '#000',
    marginTop: 20,
  },
});
