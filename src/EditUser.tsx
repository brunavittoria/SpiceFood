import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, } from 'react-native';
import React from 'react';

export default function EditUser() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../assets/icons/arrow.png')} style={styles.voltarImg} />
            <Text style={styles.title}>Editar</Text>
        </View>
        <View style={styles.inputBox}>
            <TextInput
                style={styles.input}
                placeholder='Nome'
                placeholderTextColor={'#264129'}
                maxLength={30}        
            />
            <TextInput
                style={styles.input}
                placeholder='Email'
                placeholderTextColor={'#264129'}
                keyboardType="email-address"
                maxLength={30}        
            />
            <TextInput
            style={styles.input}
            placeholder='Senha'
            placeholderTextColor={'#264129'}
            keyboardType='number-pad'
            secureTextEntry={true}
            maxLength={10}
            />
        </View>
        <View style={styles.btnBox}>
            <TouchableOpacity style={styles.entrarBtn}>
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
    fontFamily: 'bold',
    left: 115
  },
  header: {
    alignItems: 'center',
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
    top: 20 ,
    backgroundColor: '#264129',
    borderRadius: 10
  },
    btnText: {
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  btnBox: {
    top: -150,
  },
  voltarImg: {
    height: 30,
    width: 30
  }
});