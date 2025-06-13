import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function RecipePage({ title, description, howToDo, time, difficulty, kcal, owner, imageURL, ingredients }) {
  return (
    <View style={styles.container}>
      <Text>{imageURL}</Text>
      {/* só puxar os dados props lá de cima, que nem esse text */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center',
    width: 160,
  },
});