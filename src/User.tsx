import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function User({ loggedUser }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Bem Vindo(a), {loggedUser.name}</Text>
      <View style={styles.optionsBox}>
        <View style={styles.option}>
          <Image source={require('../assets/icons/heart.png')} style={styles.icon} />
          <Text style={styles.optionText}>Favoritos</Text>
        </View>

        <View style={styles.option}>
          <Image source={require('../assets/icons/notification.png')} style={styles.icon} />
          <Text style={styles.optionText}>Favoritos</Text>
        </View>

        <View style={styles.option}>
          <Image source={require('../assets/icons/settings.png')} style={styles.icon} />
          <Text style={styles.optionText}>Configurações</Text>
        </View>

        <View style={styles.option}>
          <Image source={require('../assets/icons/trash.png')} style={styles.icon} />
          <Text style={styles.optionText}>Excluir Conta</Text>
        </View>

        <View style={styles.option}>
          <Image source={require('../assets/icons/log-off.png')} style={styles.icon} />
          <Text style={styles.optionText}>Sair da Conta</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '50%',
    backgroundColor: '#335637',
  },
  name: {
    fontFamily: 'Mulish-Bold',
    fontSize: 36,
    color: '#ffffff',
    position: 'absolute',
    top: 150,
    textAlign: 'center',
    alignSelf: 'center',
    padding: 20,
    zIndex: 1
  },
  optionsBox: {
    position: 'absolute',
    top: 300,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 300,
    height: 450,
    backgroundColor: '#EFEAD9',
    borderWidth: 8,
    borderColor: '#fff',
    borderRadius: 40
  },
  option: {
    alignItems: 'center'
  },
  optionText: {
    fontFamily: 'Mulish'
  },
  icon: {
    height: 42,
    width: 42,
  }
});