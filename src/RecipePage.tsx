import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';

export default function RecipePage({
  title,
  description,
  howToDo,
  time,
  difficulty,
  kcal,
  imageURL,
  ingredients,
  owner
}) {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View style={estilos.containerprincipal}>
      <ScrollView contentContainerStyle={[estilos.containerConteudo, { minHeight: '100%' }]}>
        <Text style={estilos.titulo}>{title}</Text>
        <Image source={{ uri: imageURL }} style={estilos.imagem} />

        <View style={estilos.linhainfo}>
          <View style={estilos.iteminfo}>
            <View style={estilos.iconecirculo}><Image source={require('../assets/icons/clock.png')} /></View>
            <Text style={estilos.textoinfo}>{time} min</Text>
          </View>
          <View style={estilos.iteminfo}>
            <View style={estilos.iconecirculo}><Image source={require('../assets/icons/difficulty.png')} /></View>
            <Text style={estilos.textoinfo}>{difficulty}</Text>
          </View>
          <View style={estilos.iteminfo}>
            <View style={estilos.iconecirculo}><Image source={require('../assets/icons/kcal.png')} /></View>
            <Text style={estilos.textoinfo}>{kcal} kcal</Text>
          </View>
        </View>

        <Text style={[estilos.subtitulo, {color: 'black'}]}>Ingredientes</Text>
        <View style={estilos.caixaingredientes}>
          <Text style={estilos.textoingrediente}>{ingredients}</Text>
        </View>

        <Pressable onPress={() => setModalVisible(true)} style={estilos.botaomodal}>
          <Text style={estilos.textobotao}>Ver modo de preparo</Text>
        </Pressable>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={estilos.modalFundo}>
          <View style={estilos.modalConteudo}>
            <ScrollView contentContainerStyle={estilos.modalScroll}>
              <Text style={estilos.subtitulo}>Modo de Preparo</Text>
              {Array.isArray(howToDo) ? (
                howToDo.map((step, index) => (
                  <Text key={index} style={estilos.textomodal}>
                    {index + 1}. {step}
                  </Text>
                ))
              ) : howToDo ? (
                <Text style={estilos.textomodal}>{howToDo}</Text>
              ) : (
                <Text style={estilos.textomodal}>Nenhum passo </Text>
              )}
              <Pressable onPress={() => setModalVisible(false)}>
                <Text style={estilos.fecharmodal}>Fechar</Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const estilos = StyleSheet.create({
  containerprincipal: {
    flex: 1,
    backgroundColor: '#f3eddb',
  },
  containerConteudo: {
    padding: 20,
    paddingBottom: 100,
    flexGrow: 1,
  },
  titulo: {
    fontSize: 26,
    fontFamily: 'Mulish-Bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#2f2f2f',
  },
  imagem: {
    width: '100%',
    height: 370,
    borderRadius: 12,
    marginBottom: 16,
  },
  linhaicons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 20,
  },
  iconecirculo: {
    backgroundColor: '#2f4f30',
    borderRadius: 999,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icone: {
    color: '#fff',
    fontSize: 22,
  },
  linhainfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 24,
  },
  iteminfo: {
    alignItems: 'center',
  },
  textoinfo: {
    fontFamily: 'Mulish-Bold',
    fontSize: 14,
    color: '#333',
    marginTop: 6,
  },
  subtitulo: {
    fontSize: 20,
    fontFamily: 'Mulish-Bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
    color: 'white',
  },
  caixaingredientes: {
    width: '100%',
    backgroundColor: '#2f4f30',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
  textoingrediente: {
    color: '#fff',
    fontFamily: 'Mulish-Bold',
    fontSize: 16,
    marginBottom: 4,
  },
  botaomodal: {
    alignSelf: 'center',
    backgroundColor: '#335637',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
    marginBottom: 32,
  },
  textobotao: {
    fontFamily: 'Mulish-Bold',
    color: 'white',
    fontSize: 16,
  },
  modalFundo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalConteudo: {
    backgroundColor: '#2f4f30',
    padding: 20,
    borderRadius: 12,
    width: '85%',
    maxHeight: '80%',
  },
  modalScroll: {
    paddingBottom: 20,
  },
  textomodal: {
    fontFamily: 'Mulish',
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  fecharmodal: {
    fontFamily: 'Mulish-Bold',
    color: '#f3eddb',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
});