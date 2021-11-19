/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';

export default class login extends Component {
  constructor() {
    super();
  }

  //const [text , setText] = React.useState();

  render() {

    return (
      <View style={styles.fullView}>
        <View style={styles.view1}>
          <Image source={require('../assets/Image/pic4.png')} />
        </View>
        <Text style={styles.text1}> Sign In </Text>
        <View style={styles.view2}>
            <TextInput style={styles.input}
            placeholder="Username"
            //onChangeText = {setText}
            />
            <TextInput style={styles.input}
            placeholder="Password"
            //onChangeText = {setText}
            />
        </View>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.text2}> LogIn </Text>
        </TouchableOpacity>
        <Text style={styles.text3}> *Use Your NIC for Username </Text>
        <TouchableOpacity style={styles.Fpw} >
          <Text style={styles.text4}> Forgot Password ? </Text>
        </TouchableOpacity>
        <View style={styles.view3}>
          <Text style={styles.text5}> Don't Have Account ? </Text>
          <TouchableOpacity style={styles.register} >
          <Text style={styles.text6}> Register </Text>
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
    borderWidth: 3,
    borderRadius:30,
    margin:10,
    width: 320,
    textAlign: 'center',
  },
  button: {
    borderWidth: 3,
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
    margin: 18,
    marginLeft: 45,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  text5: {
    fontSize: 23,
    textAlign: 'left',
    margin: 10,
    marginLeft: 30,
    color: '#000',
  },
  text6: {
    fontSize: 20,
    textAlign: 'center',
    margin: 3,
    color: '#000',
  },
  register: {
    borderWidth: 3,
    borderRadius:30,
    margin:8,
    width: 130,
    backgroundColor: '#F67676',
    marginLeft: 240,
  },
});
