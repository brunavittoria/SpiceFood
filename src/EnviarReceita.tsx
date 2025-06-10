import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, } from 'react-native';
import { db } from './Firebase';

export default function EnviarReceita({ loggedUser }) {
    const [tempo, setTempo] = useState(90);
    const [dificuldade, setDificuldade] = useState<'Facil' | 'Medio' | 'Dificil'>('Facil');
    const [calorias, setCalorias] = useState('1000');
    const [ingredientes, setIngredientes] = useState('');
    const [passo, setPasso] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');

    const enviarReceita = async () => {
        try {
            await addDoc(collection(db, 'recipes'), {
                description: descricao,
                difficulty: dificuldade,
                howToDo: passo,
                imgURL: '',
                ingredients: ingredientes,
                kcal: calorias,
                owner: loggedUser,
                time: tempo,
                title: titulo
            })
            .then(() => Alert.alert('Sucesso!', 'Receita enviada!'));
        } catch (error) {
            Alert.alert('Erro!', String(error));
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.Titulo}>Enviar Receita</Text>
            </View>
            <ScrollView>
                <View style={styles.conteudo}>
                    <Text style={styles.desc}>Imagem</Text>
                    <Image source={require('../assets/cheese-pizza.jpg')} style={styles.image} />

                    <Text style={[styles.Titulo, { bottom: 30 }]}>Título</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Adicione um Nome"
                        onChangeText={(value) => setTitulo(value)}
                    />

                    <Text style={[styles.desc, { bottom: 20 }]}>Descrição</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Adicione uma Descrição"
                        onChangeText={(value) => setDescricao(value)}
                    />

                    <Text style={[styles.desc, { bottom: 20 }]}>Ingredientes</Text>
                    <View style={styles.caixadesc}>
                        <TextInput
                            style={styles.preparo}
                            placeholder="Adicione os Ingredientes"
                            onChangeText={(value) => setIngredientes(value)}
                        />
                    </View>

                    <Text style={[styles.desc, { bottom: 25 }]}>Passo a Passo</Text>
                    <View style={styles.caixadesc}>
                        <TextInput
                            style={styles.preparo}
                            placeholder="Adicione um Modo de Preparo"
                            onChangeText={(value) => setPasso(value)}
                        />
                    </View>

                    <Text style={[styles.desc, { bottom: 25 }]}>Tempo</Text>
                    <View style={styles.boxTempo}>
                        <TouchableOpacity onPress={() => setTempo(Math.max(0, tempo - 5))}>
                            <Text style={styles.tempoBtn}>-</Text>
                        </TouchableOpacity>
                        <Text>{tempo} minutos</Text>
                        <TouchableOpacity onPress={() => setTempo(tempo + 5)}>
                            <Text style={styles.tempoBtn}>+</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={[styles.desc, { bottom: 20 }]}>Dificuldade</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20, bottom: 20 }}>
                        {['Facil', 'Medio', 'Dificil'].map((nivel) => (
                            <TouchableOpacity key={nivel} onPress={() => setDificuldade(nivel as any)}>
                                <Text style={{ fontSize: 25, color: 'black' }}>
                                    {dificuldade === nivel ? '●' : '○'} {nivel}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <Text style={[styles.desc, { bottom: 45 }]}>Calorias</Text>
                    <TextInput
                        style={styles.caloriaInput}
                        keyboardType="numeric"
                        value={calorias}
                        onChangeText={setCalorias}
                        placeholder="Calorias (kcal)"
                        placeholderTextColor="#264129"
                    />

                    <TouchableOpacity style={styles.botao} onPress={enviarReceita}>
                        <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEAD9',
    },
    header: {
        paddingTop: 50,
        textAlign: 'center',
    },
    Titulo: {
        fontSize: 22,
        color: '#000000',
        textAlign: 'center',
        bottom: 25
    },
    conteudo: {
        paddingHorizontal: 16,
        //        bottom: 50,
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
        marginBottom: 15,
    },
    input: {
        fontSize: 18,
        borderBottomWidth: 1,
        borderColor: '#406343',
        paddingVertical: 4,
        paddingHorizontal: 8,
        color: '#000000',
        bottom: 15
    },
    caixadesc: {
        marginTop: 10,
        paddingTop: 10,
        backgroundColor: '#EFEAD9',
        borderRadius: 8,
        padding: 12,
        borderColor: '#264129',
        borderWidth: 2,
        bottom: 25
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
        bottom: 20,
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
        bottom: 50,
    },
    botao: {
        backgroundColor: '#264129',
        paddingVertical: 14,
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 40,
        bottom: 60
    },
});