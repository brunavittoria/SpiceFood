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
      const login = await signInWithEmailAndPassword(auth, email, pass);

      if (login) {
        const userRef = doc(collection(db, 'users'), email);
        const data = (await getDoc(userRef)).data();
        
        setLoggedUser({
          name: data.name,
          email: email,
        })
        setCurrentScreen(<Home />);
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
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          style={styles.input}
          placeholder='Senha'
          placeholderTextColor={'white'}
          keyboardType='number-pad'
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
        <TouchableOpacity style={styles.semContaBtn} onPress={() => setCurrentScreen(<SignUp setCurrentScreen={setCurrentScreen} setLoggedUser={setLoggedUser} />)}>
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
  entrarBtn: {
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