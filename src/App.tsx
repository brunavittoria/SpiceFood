import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './NavBar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import Home from './Home';
import React from 'react';
import User from './User';
import Login from './Login';
import Cadastrar from './Cadastrar';
import EditUser from './EditUser';
import AdicionarReceitas from './AdicionarReceitas';
import EnviarReceitas from './EnviarReceita';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(<Home />);
  const [loaded, error] = useFonts({
    'Mulish': require('../assets/fonts/Mulish.ttf'),
    'Quicksand': require('../assets/fonts/Quicksand.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return (
    <View style={styles.container}>
      {/* {currentScreen} */}
      <EnviarReceitas />
      <NavBar setCurrentScreen={setCurrentScreen} />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEAD9',
    justifyContent: 'flex-start',
  },
});