import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CardRecipe({ id, title, description, imageURL }) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: imageURL}} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.txt}>{description}</Text>
      <TouchableOpacity>
        <Image source={require('../assets/icons/heart.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center',
    width: 160,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  title: {
    fontFamily: 'Mulish-Bold',
    fontSize: 18,
    textAlign: 'center'
  },
  txt: {
    fontFamily: 'Mulish',
    textAlign: 'center'
  }
});