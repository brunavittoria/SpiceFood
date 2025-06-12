import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, } from 'react-native';
import React, { useState } from 'react';
import Login from './Login';
import { auth, db } from './Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import { collection, doc, setDoc } from 'firebase/firestore';

export default function SignUp({ setCurrentScreen, setLoggedUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const signUp = async () => {
    try {
      const userAuthCreate = await createUserWithEmailAndPassword(auth, email, pass);

      if (userAuthCreate) {
        const userCreate = await setDoc(doc(collection(db, "users"), email), {
          name: name
        });

        Alert.alert('Sucesso!', 'Cadastro realizado!');
      }
    } catch (error) {
      Alert.alert('Erro!', String(error));
    }
  };

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
          onChangeText={(value) => setName(value)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          placeholderTextColor={'white'}
          keyboardType="email-address"
          maxLength={30}
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          style={styles.input}
          placeholder='Senha'
          placeholderTextColor={'white'}
          secureTextEntry={true}
          maxLength={12}
          onChangeText={(value) => setPass(value)}
        />
        <TouchableOpacity style={styles.cadastrarBtn} onPress={signUp}>
          <Text style={styles.btnText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.semContaBtn}>
          <Text style={styles.semContaText} onPress={() => setCurrentScreen('Login')}>Já tem uma conta? {'\n'} Entre aqui.</Text>
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
    alignSelf: 'center',
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
    fontFamily: 'Mulish',
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
    fontFamily: 'Mulish-Bold',
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10,
    color: '#264129',
    textAlign: 'center',
  },
  semContaBtn: {
    top: 120,
    backgroundColor: '#EFEAD9',
    borderRadius: 10,
  },
  semContaText: {
    fontFamily: 'Mulish-Bold',
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
    fontFamily: 'Mulish-Bold',
    position: 'absolute',
    top: 210,
    alignSelf: 'center',
    zIndex: 1,
    fontSize: 32,
    color: '#264129',
  }
});