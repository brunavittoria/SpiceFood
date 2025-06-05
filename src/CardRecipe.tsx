import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function CardRecipe({ id, title, description, imageURL }) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: imageURL}} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.txt}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center',
    width: 180,
    padding: 10,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  txt: {
    textAlign: 'center'
  }
});