/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

export default class About extends Component {
  constructor() {
    super();
  }

  render(){
    return (
      <ScrollView>
        <View style={styles.view1}>
          <Image source={require('../assets/Image/pic7.png')}/>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text1}> A blood donation occurs when a person voluntarily has blood drawn and
          used for transfusions and/or made into biopharmaceutical medications by a process called fractionation
          (separation of whole blood components). Donation may be of whole blood, or of specific components directly.
          Blood banks often participate in the collection process as well as the procedures that follow it.
          Today in the developed world, most blood donors are unpaid volunteers who donate blood for a community
          supply. In some countries, established supplies are limited and donors usually give blood when family
          or friends need a transfusion. </Text>
        </View>
        <View style={styles.image}>
          <Image source={require('../assets/Image/pic13.jpg')} style={styles.images}/>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text2}>
            To be eligible to donate whole blood, plasma or platelets, you must be:
          </Text>
        </View>
        <View style={styles.view4}>
          <Text style={styles.text3}>
            - In good health.
          </Text>
          <Text style={styles.text3}>
            - At least 16 or 17 years old, depending on the law in your state. Some states
              allow legal minors to donate with parent permission. While there's no legal upper age limit,
              policies may vary between individual donor centers.
          </Text>
          <Text style={styles.text3}>
            - At least 110 pounds (about 50 kilograms).
          </Text>
          <Text style={styles.text3}>
            - Able to pass the physical and health-history assessments.
          </Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text2}>
            Before your blood donation:
          </Text>
        </View>
        <View style={styles.view4}>
          <Text style={styles.text3}>
            - Get plenty of sleep the night before you plan to donate.
          </Text>
          <Text style={styles.text3}>
            - Eat a healthy meal before your donation. Avoid fatty foods, such as a hamburger, fries or ice cream.
          </Text>
          <Text style={styles.text3}>
            - Drink plenty of water before the donation.
          </Text>
          <Text style={styles.text3}>
            - Check to see if any medications you are taking or recently took would prevent you from donating.
            For example, if you are a platelet donor, you must not take aspirin for two days prior to donating.
            Talk to your doctor before discontinuing any medications.
          </Text>
          <Text style={styles.text3}>
            - Wear a shirt with sleeves that can be rolled up.
          </Text>
        </View>
        <View style={styles.view5}>
          <Text style={styles.text4}>
            When a person has an accident, patient die in the hospital without blood and without a blood donor.
            This app has been created as a solution to that. Anyone can register with this app and find a blood
            donor. People who donate blood can also register and help people in need blood.
          </Text>
        </View>
      </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  view1:{
    alignItems: 'center',
  },
  image: {
    alignItems: 'center',
  },
  images: {
    width: 350,
    height: 250,
    marginBottom: 20,
    marginTop: 10,
  },
  view2: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  text1: {
    fontSize: 15,
    color: '#000',
  },
  text2: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 17,
    marginBottom: 10,
  },
  text3: {
    color: '#000',
    fontSize: 15,
  },
  text4: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  view3: {
    marginLeft: 10,
    marginRight: 10,
  },
  view4: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  view5: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 110,
  },
});
