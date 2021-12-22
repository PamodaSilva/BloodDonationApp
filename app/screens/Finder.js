/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert} from 'react-native';
import SignIn from '../components/signin';
import Firebase from '@react-native-firebase/app';
import fireStore from '@react-native-firebase/firestore';
import { add } from 'react-native-reanimated';

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
  handleTel = (text) => {
    this.setState({ TelPh: text });
  }
  handleRePw = (text) => {
    this.setState({ RePassword: text });
  }
  handlePw = (text) => {
    this.setState({ password: text });
  }

  pressSetPassword = (name, city, NIC, TelPh, pw, RePw) => {
    if (!name && !city && !NIC && !TelPh && !pw && !RePw){
      Alert.alert(' Error!..', 'Some information is not filled out !!', [
        {text: 'ok.'},
      ]);
    } else if (pw !== RePw){
      Alert.alert('Alert!..', ' Password Not Equal !!', [
        {text: 'ok.'},
      ]);
    } else {
        fireStore().collection('finder').doc('NIC');
        add({
          name,
          city,
          TelPh,
          pw,
          RePw,
        })
        .then(() => {
          this.props.navigation.navigate('login');
        });
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
          () => this.pressSetPassword(this.state.name,this.state.city, this.state.TelPh,
           this.state.password, this.state.RePassword)}>
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
    borderWidth: 1.5,
    borderRadius:30,
    margin: 9,
    width: 320,
    textAlign: 'center',
  },
  button: {
    borderWidth: 1,
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
