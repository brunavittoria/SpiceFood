import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RecipePage from './RecipePage';
import { db } from './Firebase';
import { deleteDoc, doc } from 'firebase/firestore';

export default function CardRecipe({ id, title, description, owner, imageURL, difficulty, time, kcal, ingredients, howToDo, setCurrentScreen, setCurrentScreenComponent, deleteBtn }) {
  const confirmDeletion = () => {
    Alert.alert('Tem Certeza?', 'Deletar a receita é irreversível!', [
      {
        text: 'Cancelar',
        style: 'cancel'
      },
      {
        text: 'DELETAR',
        style: 'destructive',
        onPress: deleteRecipe
      }
    ]);
  };

  const deleteRecipe = () => {
    const docRef = doc(db, 'recipes', id);
    deleteDoc(docRef);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { setCurrentScreen('RecipePage'); setCurrentScreenComponent(<RecipePage title={title} description={description} owner={owner} imageURL={imageURL} difficulty={difficulty} time={time} kcal={kcal} ingredients={ingredients} howToDo={howToDo} />) }}>
        <Image style={styles.img} source={{ uri: imageURL }} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.txt}>{description}</Text>
      </TouchableOpacity>
      {
        deleteBtn &&
        <TouchableOpacity onPress={confirmDeletion}>
          <Image style={{ height: 42, width: 42 }} source={require('../assets/icons/delete.png')} />
        </TouchableOpacity>
      }
      {/* <TouchableOpacity>
        <Image source={require('../assets/icons/heart.png')} />
      </TouchableOpacity> */}
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