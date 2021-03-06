/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput, Alert, ScrollView} from 'react-native';
import SignIn from '../components/signin';
import Firebase from '@react-native-firebase/app';
import fireStore from '@react-native-firebase/firestore';
import { add } from 'react-native-reanimated';

export default class Donor2 extends Component {
  constructor() {
    super();
  }

  state = {
    Email: '',
    TelPh01: '',
    TelPh02: '',
    password: '',
    RePassword: '',
  }

  handleEmail = (text) => {
    this.setState({ Email: text });
  }
  handleTel1 = (text) => {
    this.setState({ TelPh01: text });
  }
  handleTel2 = (text) => {
    this.setState({ TelPh02: text });
  }
  handlePw = (text) => {
      this.setState({ password: text });
  }
  handleRePw = (text) => {
      this.setState({ RePassword: text });
  }

  pressSetPassword = (Email, TelPh01, TelPh02, pw, RePw) => {
    if (!Email && !TelPh01 && !TelPh02 && !pw && !RePw){
      Alert.alert(' Error!..', 'Some information is not filled out !!', [
        {text: 'ok.'},
      ]);
    } else if (pw !== RePw){
      Alert.alert('Alert!..', ' Password Not Equal !!', [
        {text: 'ok.'},
      ]);
    } else {
      fireStore().collection('Donor');
        add({
          Email,
          TelPh01,
          TelPh02,
          pw,
          RePw,
        })
        .then(() => {
          Alert.alert('Alert!..', ' Successfully save data. !!', [
            {text: 'ok.'},
          ]);
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
            placeholder="Email"
            onChangeText = {this.handleEmail}/>
          <TextInput style={styles.input}
            placeholder="Telephone Number 01"
            onChangeText = {this.handleTel1}/>
          <TextInput style={styles.input}
            placeholder="Telephone Number 02"
            onChangeText = {this.handleTel2}/>
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
            () => this.pressSetPassword(this.state.Email, this.state.TelPh01, this.state.TelPh02,
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
    marginTop: 30,
    alignItems: 'center',
  },
  input: {
    fontSize: 20,
    borderWidth: 1.5,
    borderRadius:30,
    margin:9,
    width: 320,
    textAlign: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius:30,
    margin:7,
    width: 320,
    backgroundColor: '#F67676',
    marginLeft: 45,
  },
  text1: {
    fontSize: 25,
    textAlign: 'center',
    margin: 4,
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
    marginTop: 35,
  },
});
