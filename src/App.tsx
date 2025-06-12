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
import AdicionarReceitas from './EditarReceita';
import EnviarReceitas from './EnviarReceita';
import EditarReceita from './EditarReceita';
import SignUp from './SignUp';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(''); // will be set to Login
  const [currentScreenComponent, setCurrentScreenComponent] = useState(<></>);
  const [loggedUser, setLoggedUser] = useState({
    name: null,
    email: null,
  })
  const [loaded, error] = useFonts({
    'Mulish': require('../assets/fonts/Mulish-Regular.ttf'),
    'Mulish-Bold': require('../assets/fonts/Mulish-Bold.ttf'),
    'Quicksand': require('../assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-Bold': require('../assets/fonts/Quicksand-Bold.ttf'),
  });

  // Handle fonts load and set first screen
  useEffect(() => {
    if (loaded || error) {
      setCurrentScreen('Login');

      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // set current screens
  useEffect(() => {
    if (currentScreen === 'Login') {
      setCurrentScreenComponent(<Login setCurrentScreen={setCurrentScreen} setLoggedUser={setLoggedUser} />);
    } else if (currentScreen === 'SignUp') {
      setCurrentScreenComponent(<SignUp setCurrentScreen={setCurrentScreen} setLoggedUser={setLoggedUser} />);
    } else if (currentScreen === 'Home') {
      setCurrentScreenComponent(<Home />);
    } else if (currentScreen === 'User') {
      setCurrentScreenComponent(<User loggedUser={loggedUser} />);
    } else if (currentScreen === 'EnviarReceita') {
      setCurrentScreenComponent(<EnviarReceitas setCurrentScreen={setCurrentScreen} loggedUser={loggedUser} />);
    }
  }, [currentScreen]);

  return (
    <View style={styles.container}>
      { // Only renders NavBar when not at Login or SignUp screen
        currentScreen === 'Login' || currentScreen === 'SignUp' ?
          currentScreenComponent :
          <>
            <NavBar setCurrentScreen={setCurrentScreen} loggedUser={loggedUser} />
            {currentScreenComponent}
          </>
      }
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