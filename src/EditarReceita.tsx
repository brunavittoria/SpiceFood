import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
 
export default function EditarReceita() {
  const [tempo, setTempo] = useState(90);
  const [dificuldade, setDificuldade] = useState<'Facil' | 'Medio' | 'Dificil'>('Facil');
  const [calorias, setCalorias] = useState('1000');
  const [ingredientes, setIngredientes] = useState('');
  const [passo, setPasso] = useState('');
 
  return (
    <View style={{ flex: 1, backgroundColor: '#EFEAD9' }}>
      <View style={{ paddingTop: 50 }}>
        <Text style={styles.titulo}>Editar Receita</Text>
      </View>
 
      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 50 }} showsVerticalScrollIndicator={false}>
        <Text style={styles.desc}>Imagem</Text>
        <Image source={require('../assets/cheese-pizza.jpg')} style={{ width: '100%', height: 160, borderRadius: 12, marginBottom: 30 }} />
 
        <Text style={styles.titulo}>Título</Text>
        <TextInput style={styles.input} placeholder="Pizza Queijo" placeholderTextColor="#335637" />
 
        <Text style={styles.desc}>Descrição</Text>
        <TextInput style={styles.input} placeholder="Feito com muito amor e carinho" placeholderTextColor="#335637" />
 
        <Text style={styles.desc}>Ingredientes</Text>
        <TextInput
          style={styles.boxArea}
          multiline
          placeholder="Digite os Ingredientes Necessarios "
          placeholderTextColor="#264129"
          value={ingredientes}
          onChangeText={setIngredientes}
        />
 
        <Text style={styles.desc}>Passo a Passo</Text>
        <TextInput
          style={styles.boxArea}
          multiline
          placeholder="Escreva o Modo de Preparo"
          placeholderTextColor="#264129"
          value={passo}
          onChangeText={setPasso}
        />
 
        <Text style={styles.desc}>Tempo</Text>
        <View style={styles.boxTempo}>
          <TouchableOpacity onPress={() => setTempo(Math.max(0, tempo - 5))}>
            <Text style={styles.tempoBtn}>-</Text>
          </TouchableOpacity>
          <Text>{tempo} minutos</Text>
          <TouchableOpacity onPress={() => setTempo(tempo + 5)}>
            <Text style={styles.tempoBtn}>+</Text>
          </TouchableOpacity>
        </View>
 
        <Text style={styles.desc}>Dificuldade</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
          {['Facil', 'Medio', 'Dificil'].map((nivel) => (
            <TouchableOpacity key={nivel} onPress={() => setDificuldade(nivel as any)}>
              <Text style={{ fontSize: 25, color: 'black' }}>
                {dificuldade === nivel ? '●' : '○'} {nivel}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
 
        <Text style={styles.desc}>Calorias</Text>
        <TextInput
          style={styles.caloriaInput}
          keyboardType="numeric"
          value={calorias}
          onChangeText={setCalorias}
          placeholder="Calorias (kcal)"
          placeholderTextColor="#264129"
        />
 
        <TouchableOpacity style={styles.botao}>
          <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Salvar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
 
const styles = StyleSheet.create({
  titulo: { fontSize: 30, textAlign: 'center', color: '#000' },
  desc: { fontSize: 30, textAlign: 'center', marginTop: 25, color: '#000' },
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: '#406343',
    paddingVertical: 4,
    paddingHorizontal: 8,
    color: '#000',
  },
  boxArea: {
    marginTop: 10,
    padding: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#264129',
    backgroundColor: '#EFEAD9',
    fontSize: 18,
    textAlignVertical: 'top',
    minHeight: 100,
    color: '#000',
  },
  boxTempo: {
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#264129',
    borderRadius: 8,
    paddingVertical: 10,
  },
  tempoBtn: {
    fontSize: 24,
    paddingHorizontal: 16,
    color: '#264129',
  },
  caloriaInput: {
    textAlign: 'center',
    fontSize: 18,
    color: '#264129',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#264129',
    paddingBottom: 4,
    marginHorizontal: 100,
  },
  botao: {
    backgroundColor: '#264129',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 40,
  },
});
 