import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import CardRecipe from './CardRecipe';

export default function Home() {
  return (
    <>
      <View style={styles.searchBox}>
        <Text style={[styles.txt, styles.title]}>Receitas</Text>
        <Image style={styles.logo} source={require('./assets/icons/logo-app.png')} />
      </View>
      <View>
        <TextInput style={styles.input} placeholder='Pesquisar' />
        <Image style={styles.inputIcon} source={require('./assets/icons/search.png')} />
      </View>
      <View style={styles.cardsBox}>
        <CardRecipe title='Pizza de Queijo' description='Feita com muito Amor e Carinho' />
        <CardRecipe title='Sorvete Limão e canela' description='Com um toque de canela' />
      </View>
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
    justifyContent: "center",
    gap: 15
  }
});
