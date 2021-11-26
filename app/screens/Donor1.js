/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert} from 'react-native';
import SignIn from '../components/signin';
import Firebase from '@react-native-firebase/app';
export default class Donor1 extends Component {
  constructor() {
    super();
  }

  state = {
    name : '',
    city: '',
    bloodType: '',
    NIC: '',
    BloodBankID: '',
  }

  handleName = (text) => {
    this.setState({ name: text });
  }
  handleCity = (text) => {
    this.setState({ city: text });
  }
  handleBloodType = (text) => {
    this.setState({ bloodType: text });
  }
  handleNIC = (text) => {
    this.setState({ NIC: text });
  }
  handleBloodBankID = (text) => {
    this.setState({ BloodBankID: text });
  }

  onPressNext = (name, city,bloodType, NIC) => {
    if (!name && !city && !bloodType && !NIC){
      Alert.alert(' Error!..', 'Some information is not filled out !!', [
        {text: 'ok.'},
      ]);
    } else {
      this.props.navigation.navigate('Donor02');
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
        <TouchableOpacity style={styles.button} onPress ={
          () => this.onPressNext(this.state.name, this.state.city, this.state.bloodType, this.state.NIC)}>
          <Text style={styles.text2}> Next </Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.text3}> Do You have an Account ? </Text>
          <TouchableOpacity style={styles.register} onPress={this.onPressSignIn}>
            <Text style={styles.text4}> Sign In </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  text4: {
    fontSize: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  register: {
    alignItems: 'center',
  },
  text3: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
    color: '#000',
    marginTop: 35,
  },
});
