import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Home() {
  return (
    <>
      <View style={styles.box}>
        <Text style={[styles.txt, styles.title]}>Receitas</Text>
        <Image style={styles.logo} source={require('./assets/icons/logo-app.png')} />
      </View>
      <View>
        <TextInput style={styles.input} />
        <Image style={styles.inputIcon} source={require('./assets/icons/search.png')} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  box: {
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
    height: 75,
    width: 75
  },
  input: {
    borderBottomWidth: 3,
    borderBottomColor: '#264129'
  },
  inputIcon: {
    position: 'absolute',
    right: 0
  }
});
