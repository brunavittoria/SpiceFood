import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, } from 'react-native';
import React from 'react';
import Login from './Login';

export default function SignUp({ setCurrentScreen }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/icons/logo-app.png')} style={styles.logoImg} />
      <Text style={styles.spiceFood}>SpiceFood</Text>
      <View style={styles.triangle}>
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder='Nome'
          placeholderTextColor={'white'}
          maxLength={30}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          placeholderTextColor={'white'}
          keyboardType="email-address"
          maxLength={30}
        />
        <TextInput
          style={styles.input}
          placeholder='Senha'
          placeholderTextColor={'white'}
          keyboardType='number-pad'
          secureTextEntry={true}
          maxLength={10}
        />
        <TouchableOpacity style={styles.cadastrarBtn}>
          <Text style={styles.btnText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.semContaBtn}>
          <Text style={styles.semContaText} onPress={() => setCurrentScreen(<Login setCurrentScreen={setCurrentScreen} />)}>Já tem uma conta? {'\n'} Entre aqui.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#264129',
    justifyContent: 'center',
    padding: 20
  },
  triangle: {
    position: 'absolute',
    top: -850,
    left: '-78%',
    height: 1000,
    width: 1000,
    backgroundColor: '#EFEAD9',
    transform: [{ 'rotate': '45deg' }],
  },
  input: {
    padding: 20,
    borderBottomWidth: 2,
    borderColor: 'white',
    fontSize: 24,
    color: 'white',
    fontFamily: 'Mulish'
  },
  inputBox: {
    marginTop: 100,
  },
  cadastrarBtn: {
    top: 20,
    backgroundColor: '#EFEAD9',
    borderRadius: 10
  },
  btnText: {
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10,
    color: '#264129',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  semContaBtn: {
    top: 120,
    backgroundColor: '#EFEAD9',
    borderRadius: 10,
  },
  semContaText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#264129',
    margin: 10,
  },
  logoImg: {
    position: 'absolute',
    top: -20,
    height: 256,
    width: 256,
    zIndex: 1,
    alignSelf: 'center',
  },
  spiceFood: {
    position: 'absolute',
    top: 210,
    alignSelf: 'center',
    zIndex: 1,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#264129',
  }
});