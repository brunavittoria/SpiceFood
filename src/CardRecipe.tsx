import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RecipePage from './RecipePage';

export default function CardRecipe({ id, title, description, owner, imageURL, difficulty, time, kcal, ingredients, howToDo, setCurrentScreen, setCurrentScreenComponent }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { setCurrentScreen('RecipePage'); setCurrentScreenComponent(<RecipePage title={title} description={description} owner={owner} imageURL={imageURL} difficulty={difficulty} time={time} kcal={kcal} ingredients={ingredients} howToDo={howToDo} />) }}>
        <Image style={styles.img} source={{ uri: imageURL }} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.txt}>{description}</Text>
      </TouchableOpacity>
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