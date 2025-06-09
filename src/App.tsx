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
import EditUser from './EditUser';
import AdicionarReceitas from './AdicionarReceitas';
import EnviarReceitas from './EnviarReceita';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(<></>); // will be set to Login
  const [loggedUser, setLoggedUser] = useState({
    name: null,
    email: null,
  })
  const [loaded, error] = useFonts({
    'Mulish': require('../assets/fonts/Mulish.ttf'),
    'Quicksand': require('../assets/fonts/Quicksand.ttf'),
  });


  useEffect(() => {
    if (loaded || error) {
      setCurrentScreen(<Login setCurrentScreen={setCurrentScreen} setLoggedUser={setLoggedUser} />);
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return (
    <View style={styles.container}>
      {currentScreen == <Login setCurrentScreen={setCurrentScreen} setLoggedUser={setLoggedUser} /> ?
        currentScreen
        :
        <>
          <NavBar setCurrentScreen={setCurrentScreen} loggedUser={loggedUser} />
          {currentScreen}
        </>}
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