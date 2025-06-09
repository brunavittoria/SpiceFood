import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import CardRecipe from './CardRecipe';
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './Firebase';

export default function Favoritos() {
  const [recipes, setRecipes] = useState([]);

  // Gets data when app loads and everytime database changes
  useEffect(() => {
    const getData = async () => {
      const recipesRef = collection(db, 'recipes');

      onSnapshot(recipesRef, (snapshot) => {
        let list = [];

        snapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
            owner: doc.data().owner,
            imageURL: doc.data().imageURL,
            difficulty: doc.data().difficult,
            time: doc.data().time,
            kcal: doc.data().kcal,
            ingredients: doc.data().ingredients,
            howToDo: doc.data().howToDo,
          });
        });

        console.log(list);
        setRecipes(list);
      });
    } 
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Text style={[styles.txt, styles.title]}>Favoritos</Text>
        <Image style={styles.logo} source={require('../assets/icons/logo-app.png')} />
      </View>

      {/* Configure btn for back end */}
      <View>
        <TextInput style={styles.input} placeholder='Filtrar' />
      </View>

      <ScrollView contentContainerStyle={styles.cardsBox}>
        {recipes.map((recipe, index) => <CardRecipe key={index} id={recipe.id} title={recipe.title} description={recipe.description} imageURL={recipe.imageURL} />)}

        {/* <CardRecipe title='Pizza de Queijo' description='Feita com muito Amor e Carinho' />
        <CardRecipe title='Sorvete Limão e canela' description='Com um toque de canela' />
        <CardRecipe title='Pizza de Queijo' description='Feita com muito Amor e Carinho' />
        <CardRecipe title='Sorvete Limão e canela' description='Com um toque de canela' />
        <CardRecipe title='Pizza de Queijo' description='Feita com muito Amor e Carinho' />
        <CardRecipe title='Sorvete Limão e canela' description='Com um toque de canela' />
        <CardRecipe title='Pizza de Queijo' description='Feita com muito Amor e Carinho' />
        <CardRecipe title='Sorvete Limão e canela' description='Com um toque de canela' />
        <CardRecipe title='Pizza de Queijo' description='Feita com muito Amor e Carinho' />
        <CardRecipe title='Sorvete Limão e canela' description='Com um toque de canela' /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  txt: {
    fontFamily: 'Mulish',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28
  },
  logo: {
    height: 65,
    width: 65
  },
  input: {
    marginTop: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#264129'
  },
  cardsBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
    paddingBottom: 100
  }
});