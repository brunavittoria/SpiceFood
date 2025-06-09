import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import Home from './Home';
import User from './User';

SplashScreen.preventAutoHideAsync();

export default function NavBar({ setCurrentScreen, loggedUser }) {
  return (
    <View style={styles.navbar}>

      <View style={styles.navItem}>
        <Pressable style={styles.icon} onPress={() => setCurrentScreen(<Home />)}>
          <Image source={require('../assets/icons/fork-spoon.png')} />
        </Pressable>
        <Text style={styles.txt}>Início</Text>
      </View>

      <View style={styles.navItem}>
        <Pressable style={styles.icon} onPress={() => setCurrentScreen(<></>)}>
          <Image source={require('../assets/icons/recipes-book.png')} />
        </Pressable>
        <Text style={styles.txt}>Suas Receitas</Text>
      </View>

      <View style={styles.navItem}>
        <Pressable style={styles.icon} onPress={() => setCurrentScreen(<User loggedUser={loggedUser.name} />)}>
          <Image source={require('../assets/icons/profile.png')} />
        </Pressable>
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
    width: '100%',
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