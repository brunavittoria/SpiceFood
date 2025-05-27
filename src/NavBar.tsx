import { Image, StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';

SplashScreen.preventAutoHideAsync();

export default function NavBar() {
  return (
    <View style={styles.navbar}>

      <View style={styles.navItem}>
        <View style={styles.icon}>
          <Image source={require('../assets/icons/fork-spoon.png')} />
        </View>
        <Text style={styles.txt}>Início</Text>
      </View>

      <View style={styles.navItem}>
        <View style={styles.icon}>
          <Image source={require('../assets/icons/recipes-book.png')} />
        </View>
        <Text style={styles.txt}>Suas Receitas</Text>
      </View>
      
      <View style={styles.navItem}>
        <View style={styles.icon}>
          <Image source={require('../assets/icons/profile.png')} />
        </View>
        <Text style={styles.txt}>Conta</Text>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 80,
    width: '111%',
    backgroundColor: '#D7D3C3'
  },
  navItem: {
    alignItems: 'center'
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    backgroundColor: '#335637',
    borderRadius: 50
  },
  txt: {
    fontFamily: 'Quicksand',
    fontWeight: 'bold'
  }
});
