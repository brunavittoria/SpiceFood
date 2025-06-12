import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, } from 'react-native';
import React, { useState } from 'react';
import SignUp from './SignUp';
import { signInWithEmailAndPassword } from 'firebase/auth/cordova';
import { auth, db } from './Firebase';
import Home from './Home';
import { collection, doc, getDoc } from 'firebase/firestore';

export default function Login({ setCurrentScreen, setLoggedUser }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const signIn = async () => {
    try {
      const login = await signInWithEmailAndPassword(auth, email.toLocaleLowerCase(), pass);

      if (login) {
        const userRef = doc(collection(db, 'users'), email);
        const data = (await getDoc(userRef)).data();
        
        setLoggedUser({
          name: data.name,
          email: email,
        })
        setCurrentScreen('Home');
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
          placeholder='Email'
          placeholderTextColor={'white'}
          keyboardType="email-address"
          maxLength={30}
          onChangeText={(value) => setEmail(value.toLocaleLowerCase())}
        />
        <TextInput
          style={styles.input}
          placeholder='Senha'
          placeholderTextColor={'white'}
          secureTextEntry={true}
          maxLength={6}
          onChangeText={(value) => setPass(value)}
        />
        <TouchableOpacity style={styles.entrarBtn} onPress={signIn}>
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.convidadoBtn}>
          <Text style={styles.convidadoText}>Entrar como convidado</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.semContaBtn} onPress={() => setCurrentScreen('SignUp')}>
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
    marginTop: 150,
  },
  entrarBtn: {
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
  convidadoBtn: {
    top: 100,
    borderWidth: 2,
    backgroundColor: '#264129',
    borderColor: '#EFEAD9',
    fontWeight: 'bold',
    borderRadius: 10,
  },
  convidadoText: {
    fontFamily: 'Mulish',
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    margin: 10,
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