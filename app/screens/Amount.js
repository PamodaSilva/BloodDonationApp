/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class Amount extends Component {
  constructor() {
    super();
  }

  render(){
    return (
      <View>
        <View style={styles.view1}>
          <Image source={require('../assets/Image/pic6.png')}/>
        </View>
        <View style={styles.view2}>
          <View>
            <Text style={styles.text2}> A+ </Text>
            <Text style={styles.text2}> B+ </Text>
            <Text style={styles.text2}> AB+ </Text>
            <Text style={styles.text2}> O+ </Text>
          </View>
          <View style={styles.view4}>
            <Text style={styles.number}> 00 </Text>
            <Text style={styles.number}> 00 </Text>
            <Text style={styles.number}> 00 </Text>
            <Text style={styles.number}> 00 </Text>
          </View>
          <View style={styles.view3}>
            <Text style={styles.text2}> A- </Text>
            <Text style={styles.text2}> B- </Text>
            <Text style={styles.text2}> AB- </Text>
            <Text style={styles.text2}> O- </Text>
          </View>
          <View style={styles.view4}>
            <Text style={styles.number}> 00 </Text>
            <Text style={styles.number}> 00 </Text>
            <Text style={styles.number}> 00 </Text>
            <Text style={styles.number}> 00 </Text>
          </View>
        </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  view1:{
    alignItems: 'center',
  },
  view2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 45,
  },
  view4: {
    marginLeft: -15,
  },
  view3: {
    marginLeft: 20,
  },
  text2: {
    fontSize: 30,
    margin: 9,
    marginBottom: 40,
    color: '#000',
  },
  number: {
    fontSize: 30,
    margin: 9,
    marginBottom: 40,
  },
});
