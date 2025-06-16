import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, } from 'react-native';
import React, { useState } from 'react';
import { auth, db } from './Firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { getAuth, updatePassword } from 'firebase/auth';
import firebase from 'firebase/compat/app';

export default function EditUser({ loggedUser }) {
  const [name, setName] = useState('');
  // const [pass, setPass] = useState('');

  const updateData = async () => {
    if (name) {
      const docRef = doc(db, 'users', loggedUser.email);

      try {
        await updateDoc(docRef, {
          name: name,
        })
          .then(() => Alert.alert('Sucesso!', 'Informações atualizadas! Você deve reentrar para a alteração entrar em vigor.'))

      } catch (error) {
        alert(error);
      }
    } else {
      alert('Preencha todas as informações!');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Editar dados</Text>
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder='Nome'
          placeholderTextColor={'#264129'}
          onChangeText={(value) => setName(value)}
        />
        {/* <TextInput
          style={styles.input}
          placeholder='Senha'
          placeholderTextColor={'#264129'}
          secureTextEntry={true}
          onChangeText={(value) => setPass(value)}
        /> */}
      </View>
      <View style={styles.btnBox}>
        <TouchableOpacity style={styles.entrarBtn} onPress={updateData}>
          <Text style={styles.btnText}>Salvar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEAD9',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    color: 'black',
    fontSize: 36,
    fontFamily: 'Mulish-Bold',
  },
  header: {
    justifyContent: 'center',
    top: -200,
    flexDirection: 'row',
  },
  input: {
    padding: 20,
    borderBottomWidth: 2,
    borderColor: '#264129',
    fontSize: 24,
    color: '#264129',
    fontFamily: 'Mulish'
  },
  inputBox: {
    top: -200,
    marginTop: 100,
  },
  entrarBtn: {
    top: 20,
    backgroundColor: '#264129',
    borderRadius: 10
  },
  btnText: {
    fontFamily: 'Mulish-Bold',
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
  btnBox: {
    top: -150,
  },
});