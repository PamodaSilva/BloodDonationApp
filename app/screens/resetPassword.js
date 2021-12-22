/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert, Image} from 'react-native';

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
    if (!pw && !RePw){
      Alert.alert(' Error!..', 'Some information is not filled out !!', [
        {text: 'ok.'},
      ]);
    } else if (pw !== RePw){
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

  onPressBack = () => {
    this.props.navigation.navigate('login');
  }

  render(){
    return (
      <ScrollView>
        <View>
          <Text style={styles.text1}> Reset Your Password </Text>
        </View>
        <View style={styles.view1}>
          <Image source={require('../assets/Image/pic3.png')} style={styles.image}/>
        </View>
        <View style={styles.view2}>
          <TextInput style={styles.input}
            placeholder="NIC"
            onChangeText = {this.handleNIC}/>
          <TextInput style={styles.input}
            placeholder="New Password"
            onChangeText = {this.handlePw}
            secureTextEntry= {true}/>
          <TextInput style={styles.input}
            placeholder="Re-Type New Password"
            onChangeText = {this.handleRePw}
            secureTextEntry= {true}/>
        </View>
        <TouchableOpacity style={styles.button} onPress ={
          () => this.pressSetPassword(this.state.password, this.state.RePassword)}>
          <Text style={styles.text2}> Reset </Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.text3}> Do You Remember the Password ? </Text>
          <TouchableOpacity style={styles.back} onPress={this.onPressBack}>
              <Text style={styles.text4}> -- Back -- </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text1:{
    fontSize:25,
    textAlign: 'center',
    marginTop: 55,
    color: '#000',
  },
  view1: {
    alignItems: 'center',
    marginTop: 40,
  },
  image: {
    width:120,
    height: 120,
  },
  view2: {
    marginTop: 40,
    alignItems: 'center',
  },
  input: {
    fontSize: 20,
    borderWidth: 1.5,
    borderRadius:30,
    margin: 10,
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
    fontSize: 22,
    textAlign: 'center',
    margin: 8,
    color: '#000',
  },
  text4: {
    fontSize: 19,
    textAlign: 'center',
  },
  back: {
    alignItems: 'center',
  },
  text3: {
    fontSize: 21,
    textAlign: 'center',
    margin: 15,
    color: '#000',
    marginTop: 35,
  },
});
