import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, } from 'react-native';
import { db } from './Firebase';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import Home from './Home';

export default function EnviarReceita({ loggedUser }) {
    const [tempo, setTempo] = useState(0);
    const [dificuldade, setDificuldade] = useState('');
    const [calorias, setCalorias] = useState('');
    const [ingredientes, setIngredientes] = useState('');
    const [passo, setPasso] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [image, setImage] = useState(null);

    const pegarImagem = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const enviarReceita = async () => {
        if (!tempo || !dificuldade || !calorias || !ingredientes || !passo || !titulo || !descricao) {
            Alert.alert('Oops!', 'Preencha todas as informações!');
            return;
        }

        const apiKey = '6ec8b6a7805aa50394bff8215dd76894';
        const formData = new FormData();
        const base64Image = await FileSystem.readAsStringAsync(image, {
            encoding: FileSystem.EncodingType.Base64,
        });
        let uploadedImgURL = '';

        formData.append('image', base64Image);

        try {
            await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`,
                {
                    method: 'POST',
                    body: formData,
                }
            )
                .then((response) => response.json())
                .then((response) => uploadedImgURL = response.data.display_url)

            await addDoc(collection(db, 'recipes'), {
                description: descricao,
                difficulty: dificuldade,
                howToDo: passo,
                imageURL: uploadedImgURL,
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
                    <TouchableOpacity style={styles.imgBotao} onPress={pegarImagem}>
                        <Text style={styles.imgBotaoTxt}>Selecione uma imagem aqui!</Text>
                    </TouchableOpacity>
                    {image === null ? <Image source={require('../assets/icons/pic-placeholder.png')} style={styles.image} /> : <Image source={{ uri: image }} style={styles.image} />}

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
                        <Text style={{ fontFamily: 'Mulish', fontSize: 20 }}>{tempo} minutos</Text>
                        <TouchableOpacity onPress={() => setTempo(tempo + 5)}>
                            <Text style={styles.tempoBtn}>+</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={[styles.desc, { bottom: 20 }]}>Dificuldade</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20, bottom: 20 }}>
                        {['Fácil', 'Médio', 'Difícil'].map((nivel) => (
                            <TouchableOpacity key={nivel} onPress={() => setDificuldade(nivel as any)}>
                                <Text style={{ fontFamily: 'Mulish', fontSize: 25, color: 'black' }}>
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
                        <Text style={styles.botaoTxt}>Enviar</Text>
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
        paddingBottom: 20
    },
    header: {
        paddingTop: 50,
        textAlign: 'center',
    },
    Titulo: {
        fontFamily: 'Mulish-Bold',
        fontSize: 22,
        color: '#000000',
        textAlign: 'center',
        bottom: 25
    },
    conteudo: {
        paddingHorizontal: 16,
    },
    image: {
        alignSelf: 'center',
        width: 200,
        height: 200,
        borderRadius: 12,
        marginBottom: 50,
    },
    label: {
        fontSize: 19,
        color: '#406343',
        marginBottom: 16,
    },
    desc: {
        fontFamily: 'Mulish-Bold',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 25,
        color: '#000000',
        marginBottom: 15,
    },
    input: {
        fontFamily: 'Mulish',
        fontSize: 18,
        borderBottomWidth: 2,
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
        fontFamily: 'Mulish',
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
        width: '100%',
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
        fontFamily: 'Mulish',
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 18,
        color: '#264129',
        width: '50%',
        marginBottom: 16,
        borderBottomWidth: 2,
        borderColor: '#264129',
        paddingBottom: 4,
        bottom: 50,
    },
    botao: {
        fontFamily: 'Mulish',
        backgroundColor: '#264129',
        paddingVertical: 14,
        borderRadius: 8,
        bottom: 60,
        marginBlock: 30
    },
    botaoTxt: {
        fontFamily: 'Mulish-Bold',
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
    },
    imgBotao: {
        backgroundColor: '#264129',
        padding: 10,
        borderRadius: 10,
        marginBottom: 5
    },
    imgBotaoTxt: {
        color: '#fff'
    }
});