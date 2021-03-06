/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';

export default class profile extends Component {
  constructor() {
    super();
  }

  onPressLogOut = () => {
    this.props.navigation.navigate('Home');
  }

  render(){
    return (
      <ScrollView>
        <View style={styles.view1}>
          <Text style={styles.text1}> My Profile </Text>
        </View>
        <TouchableOpacity style={styles.view2}>
          <Image source={require('../assets/Image/person.jpg')} style={styles.image}/>
        </TouchableOpacity>
        <View style={styles.view3}>
            <Text style={styles.detail}> Name </Text>
            <Text style={styles.detail}> City </Text>
            <Text style={styles.detail}> NIC </Text>
            <Text style={styles.detail}> Email </Text>
            <Text style={styles.detail}> Telephone Number 01 </Text>
            <Text style={styles.detail}> Telephone Number 02 </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text3} onPress={this.onPressLogOut}> Log Out </Text>
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
    marginTop: 30,
    textAlign: 'center',
    color: '#000',
    marginBottom: 8,
  },
  view2:{
    alignItems: 'center',
    marginTop: 14,
  },
  image: {
    width: 105,
    height: 105,
    borderRadius: 70,
  },
  view3:{
    alignItems: 'center',
    marginTop: 15,
  },
  detail: {
    borderWidth: 1.5,
    borderRadius: 30,
    fontSize: 25,
    margin: 8,
    width: 340,
    height: 50,
    textAlign: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius:30,
    margin:10,
    width: 150,
    backgroundColor: '#F67676',
    marginLeft: 140,
    marginBottom: 15,
  },
  text3: {
    fontSize: 25,
    textAlign: 'center',
    color: '#000',
  },
});
