import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import Home from './Home';
import User from './User';
import EnviarReceita from './EnviarReceita';

SplashScreen.preventAutoHideAsync();

export default function NavBar({ setCurrentScreen, loggedUser }) {
  return (
    <View style={styles.navbar}>

      <View style={styles.navItem}>
        <Pressable style={styles.icon} onPress={() => setCurrentScreen('Home')}>
          <Image source={require('../assets/icons/fork-spoon.png')} />
        </Pressable>
        <Text style={styles.txt}>Início</Text>
      </View>

      <View style={styles.navItem}>
        <Pressable style={styles.icon} onPress={() => setCurrentScreen('EnviarReceita')}>
          <Image source={require('../assets/icons/plus.png')} />
        </Pressable>
        <Text style={styles.txt}>Enviar Receita</Text>
      </View>

      <View style={styles.navItem}>
        <Pressable style={styles.icon} onPress={() => setCurrentScreen('')}>
          <Image source={require('../assets/icons/recipes-book.png')} />
        </Pressable>
        <Text style={styles.txt}>Suas Receitas</Text>
      </View>

      <View style={styles.navItem}>
        <Pressable style={styles.icon} onPress={() => setCurrentScreen('User')}>
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
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 20,
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
    fontFamily: 'Quicksand-Bold',
    fontSize: 14
  }
});