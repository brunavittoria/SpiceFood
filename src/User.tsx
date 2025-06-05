import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function User() {
  return (
    <>
      <View style={styles.bckgTop}></View>
      <View style={styles.bckgBottom}></View>
      <Text style={styles.name}>Bem Vindo, $userName</Text>
      <View style={styles.optionsBox}>
        <View style={styles.option}>
          <Image source={require('../assets/icons/heart.png')} style={styles.icon} />
          <Text>Favoritos</Text>
        </View>

        <View style={styles.option}>
          <Image source={require('../assets/icons/notification.png')} style={styles.icon} />
          <Text>Favoritos</Text>
        </View>

        <View style={styles.option}>
          <Image source={require('../assets/icons/settings.png')} style={styles.icon} />
          <Text>Configurações</Text>
        </View>

        <View style={styles.option}>
          <Image source={require('../assets/icons/trash.png')} style={styles.icon} />
          <Text>Excluir Conta</Text>
        </View>

        <View style={styles.option}>
          <Image source={require('../assets/icons/log-off.png')} style={styles.icon} />
          <Text>Sair da Conta</Text>
        </View>
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
    textAlign: 'center',
    padding: 20,
    zIndex: 1
  },
  optionsBox: {
    position: 'absolute',
    top: 350,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 300,
    height: 450,
    backgroundColor: '#EFEAD9',
    borderWidth: 8,
    borderColor: '#ffffff',
    borderRadius: 40
  },
  option: {
    alignItems: 'center'
  },
  icon: {
    height: 42,
    width: 42,
  }
});