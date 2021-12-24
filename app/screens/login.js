/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert, ScrollView} from 'react-native';
export default class login extends Component {
  constructor() {
    super();
  }
  state = {
    username: '',
    password: '',
  }
  handleUsername = (text) => {
      this.setState({ username: text });
  }
  handlePassword = (text) => {
      this.setState({ password: text });
  }

  pressLogin = (name, pw) => {
    if (!name && !pw){
      Alert.alert(' Error!..', 'Your are not fill the Username or Password  !!', [
        {text: 'ok.'},
      ]);
    } else if (name === 'admin' && pw === '123'){
      Alert.alert('Success!..', ' Login successfully !!', [
        {text: 'ok.'},
      ]);
      this.props.navigation.navigate('BottomNavigation');
    } else {
      Alert.alert('Not Success!..', ' Login not successfully !!', [
        {text: 'ok.'},
      ]);
    }
  }

  onPressReset = () => {
    this.props.navigation.navigate('resetPassword');
  }

  onPressRegister = () => {
    this.props.navigation.navigate('page01');
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.view1}>
          <Image source={require('../assets/Image/pic4.png')} />
        </View>
        <Text style={styles.text1}> Sign In </Text>
        <View style={styles.view2}>
            <TextInput style={styles.input}
            placeholder="Username"
            onChangeText = {this.handleUsername}/>
            <TextInput style={styles.input}
            placeholder="Password"
            onChangeText = {this.handlePassword}
            secureTextEntry= {true}/>
        </View>
        <TouchableOpacity style={styles.button} onPress ={
          () => this.pressLogin(this.state.username, this.state.password)}>
          <Text style={styles.text2}> LogIn </Text>
        </TouchableOpacity>
        <Text style={styles.text3}> *Use Your NIC for Username </Text>
        <TouchableOpacity>
          <Text style={styles.text4} onPress={this.onPressReset}> Forgot Password ? </Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.text5}> Don't Have Account ? </Text>
          <TouchableOpacity>
          <Text style={styles.text6} onPress={this.onPressRegister}> - Register - </Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  view1:{
    alignItems: 'center',
  },
  text1: {
    fontSize: 35,
    marginTop: 20,
    textAlign: 'center',
    color: '#000',
  },
  view2: {
    marginTop: 20,
    alignItems: 'center',
  },
  input: {
    fontSize: 20,
    borderWidth: 1.5,
    borderRadius:30,
    margin:10,
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
  text2: {
    fontSize: 25,
    textAlign: 'center',
    margin: 5,
    color: '#000',
  },
  text3: {
    fontSize: 15,
    marginLeft: 80,
  },
  text4: {
    fontSize: 19,
    textAlign: 'left',
    marginLeft: 50,
    marginTop: 30,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  text5: {
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
    color: '#000',
    marginTop: 35,
  },
  text6: {
    fontSize: 20,
    textAlign: 'center',
  },
});
