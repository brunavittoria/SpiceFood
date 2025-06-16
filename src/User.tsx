import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import EditUser from './EditUser';
import { auth } from './Firebase';

export default function User({ setCurrentScreen, loggedUser }) {
  const logOut = () => {
    setCurrentScreen('Login');
  }
  const deleteUserInfo = () => {
    Alert.alert('Requisição de exclusão', 'Infelizmente ainda não conseguimos deletar sua conta diretamente pelo app, para excluir sua conta e dados, envie uma requisição de exclusão para o email accountdeletion@spicefood.com e siga as instruções.');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Bem Vindo(a),{'\n'}{loggedUser.name}</Text>
      <View style={styles.optionsBox}>
        <TouchableOpacity style={styles.option} onPress={logOut}>
          <Image source={require('../assets/icons/log-off.png')} style={styles.icon} />
          <Text style={styles.optionText}>Sair da Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => setCurrentScreen('EditUser')}>
          <Image source={require('../assets/icons/manage-accounts.png')} style={styles.icon} />
          <Text style={styles.optionText}>Alterar dados</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={deleteUserInfo}>
          <Image source={require('../assets/icons/trash.png')} style={styles.icon} />
          <Text style={styles.optionText}>Excluir Conta</Text>
        </TouchableOpacity>

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
    top: 275,
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