import { Image, StyleSheet, Text, View } from 'react-native';

export default function CardRecipe({ title, description }) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('./assets/cheese-pizza.jpg')} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.txt}>{description}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    height: 150,
    padding: 10
  },
  img: {
    borderRadius: 15,
  },
  title: {
    fontWeight: 'bold'
  },
  txt: {
    textAlign: 'center'
  }
});
