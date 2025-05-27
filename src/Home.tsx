import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import CardRecipe from './CardRecipe';
import React from 'react';

export default function Home() {
  return (
    <>
      <View style={styles.searchBox}>
        <Text style={[styles.txt, styles.title]}>Receitas</Text>
        {/* Configure btn for back end */}
        <Image style={styles.logo} source={require('../assets/icons/logo-app.png')} />
      </View>

      <View>
        <TextInput style={styles.input} placeholder='Pesquisar' />
        <Image style={styles.inputIcon} source={require('../assets/icons/search.png')} />
      </View>

      <ScrollView contentContainerStyle={styles.cardsBox}>
        <CardRecipe title='Pizza de Queijo' description='Feita com muito Amor e Carinho' />
        <CardRecipe title='Sorvete Limão e canela' description='Com um toque de canela' />
        <CardRecipe title='Pizza de Queijo' description='Feita com muito Amor e Carinho' />
        <CardRecipe title='Sorvete Limão e canela' description='Com um toque de canela' />
        <CardRecipe title='Pizza de Queijo' description='Feita com muito Amor e Carinho' />
        <CardRecipe title='Sorvete Limão e canela' description='Com um toque de canela' />
        <CardRecipe title='Pizza de Queijo' description='Feita com muito Amor e Carinho' />
        <CardRecipe title='Sorvete Limão e canela' description='Com um toque de canela' />
        <CardRecipe title='Pizza de Queijo' description='Feita com muito Amor e Carinho' />
        <CardRecipe title='Sorvete Limão e canela' description='Com um toque de canela' />
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
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
  inputIcon: {
    position: 'absolute',
    top: 10,
    right: 0
  },
  cardsBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
    paddingBottom: 100
  }
});
