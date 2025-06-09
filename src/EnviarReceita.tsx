import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView,} from 'react-native';

export default function EnviarReceitas() {
    const [tempo, setTempo] = useState(90);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.Titulo}>Enviar Receita</Text>
            </View>
            <ScrollView>
                <View style={styles.conteudo}>
                    <Text style={styles.desc}>Imagem</Text>
                    <Image source={require('../assets/cheese-pizza.jpg')} style={styles.image} />

                    <Text style={styles.Titulo}>Título</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Adicione um Nome"
                    />

                    <Text style={styles.desc}>Descrição</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Adicione uma Descrição"
                    />

                    <Text style={styles.desc}>Ingredientes</Text>
                    <View style={styles.caixadesc}>
                        <TextInput
                            style={styles.preparo}
                            placeholder='Adicione os Ingredientes'
                        />
                    </View>

                    <Text style={styles.desc}>Passo a Passo</Text>
                    <View style={styles.caixadesc}>
                        <TextInput
                            style={styles.preparo}
                            placeholder='Adicione um Modo de Preparo'
                        />
                    </View>

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
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEAD9'
    },
    header: {
        paddingTop: 50,
        textAlign: 'center',
    },
    Titulo: {
        fontSize: 22,
        color: '#000000',
        textAlign: 'center',
    },
    conteudo: {
        paddingHorizontal: 16,
    },
    image: {
        width: '100%',
        height: 140,
        borderRadius: 12,
        marginBottom: 50,
    },
    label: {
        fontSize: 19,
        color: '#406343',
        marginBottom: 16,
    },
    desc: {
        fontSize: 22,
        textAlign: 'center',
        marginTop: 25,
        color: '#000000',
        marginBottom: 30,
    },
    input: {
        fontSize: 18,
        borderBottomWidth: 1,
        borderColor: '#406343',
        paddingVertical: 4,
        paddingHorizontal: 8,
        color: '#000000',
    },
    caixadesc: {
        marginTop: 10,
        paddingTop: 10,
        backgroundColor: '#EFEAD9',
        borderRadius: 8,
        padding: 12,
        borderColor: '#264129',
        borderWidth: 2,
    },
    texto: {
        fontSize: 14,
        marginBottom: 4,
        color: '#848484',
    },
    preparo: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        color: '#000000',
        fontSize: 18,
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
});