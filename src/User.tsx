import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function User() {
  return (
    <>
      <View style={styles.bckgTop}></View>
      <View style={styles.bckgBottom}></View>
      <Text style={styles.name}>name</Text>
      <View style={styles.optionsBox}>

      </View>
    </>
  );
}
const styles = StyleSheet.create({
  bckgTop: {
    flex: 1,
    backgroundColor: '#335637'
  },
  bckgBottom: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  name: {
    fontFamily: 'Mulish',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    position: 'absolute',
    top: 150,
    alignSelf: 'center',
    zIndex: 1
  },
  optionsBox: {
    position: 'absolute',
    top: 350,
    alignSelf: 'center',
    width: 300,
    height: 400,
    backgroundColor: '#EFEAD9',
    borderWidth: 8,
    borderColor: '#ffffff',
    borderRadius: 40
  }
});
