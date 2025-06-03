import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, } from 'react-native';
import React from 'react';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/icons/logo-app.png')} style={styles.logoImg} />
      <Text style={styles.spiceFood}>SpiceFood</Text>
      <View style={styles.triangle}>
      </View>
      <View style={styles.inputBox}>
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
          maxLength={6}
        />
        <TouchableOpacity style={styles.entrarBtn}>
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.convidadoBtn}>
          <Text style={styles.convidadoText}>Entrar como convidado</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.semContaBtn}>
          <Text style={styles.semContaText}>Não tem uma conta? {'\n'} Cadastre-se aqui!</Text>
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
    transform: [{'rotate': '45deg'}],
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
    top: -150,
    marginTop: 100,
  },
  entrarBtn: {
    top: 20 ,
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
  convidadoBtn: {
    top: 100,
    borderWidth: 2,
    backgroundColor: '#264129',
    borderColor: '#EFEAD9',
    fontWeight: 'bold',
    borderRadius: 10,
  },
  convidadoText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    margin: 10,
    fontFamily: 'Mulish'
  },
  semContaBtn :{
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
    height: 256,
    width: 256,
    zIndex: 1,
    alignSelf: 'center',
    top: -100
  },
  spiceFood: {
    top: -120,
    zIndex: 1,
    left: 115,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#264129'

  }
});