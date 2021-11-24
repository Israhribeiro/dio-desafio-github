import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import foto from './assets/foto_eu.jpg'

const App = () => {

  function handleRedeSocial(rede_social) {
    switch(rede_social){
      case 'github':
        Alert.alert('Meu Github','https://github.com/Israhribeiro')
        break
      case 'linkedin':
        Alert.alert('Meu LinkedIn','https://www.linkedin.com/in/israel-tavares-ribeiro-a30aa91ba/')
        break
    }
  }

  return (
    <ScrollView>
    <View style={style.page}>
      <View style={style.container_cabecalho}>
        <Image style={style.foto} source={foto}/>
        <Text style={style.nome}>Israel Tavares Ribeiro</Text>
        <Text style={style.funcao}>Desenvolvedor de Jogos e Desenvolvedor Web</Text>
        <View style={style.redes_sociais}>
          <TouchableOpacity onPress={() => handleRedeSocial('github')}>
            <Icon name="github" size={30}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
            <Icon name="linkedin" size={30}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.card_container}>
        <View style={style.card}>
          <View style={style.card_header}>
            <Text>Habilidades</Text>
          </View>
          <View style={style.card_content}>
            <Text style={style.card_content_text}>React</Text>
            <Text style={style.card_content_text}>HTML</Text>
            <Text style={style.card_content_text}>CSS</Text>
            <Text style={style.card_content_text}>JavaScript</Text>
          </View>
        </View>
      </View>
      <View style={style.card_container}>
        <View style={style.card}>
          <View style={style.card_header}>
            <Text>Formação Acadêmica</Text>
          </View>
          <View style={style.card_content}>
            <Text style={style.card_content_text}>Faculdade Impacta de Tecnologia</Text>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
  )
}

const style = StyleSheet.create({
  page: {
    backgroundColor: '#e7e7e7',
    flex: 1,
    overflow: 'scroll'
  },
  container_cabecalho: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10
  },
  redes_sociais:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    marginTop: 20
  },
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
    padding: 10,
    backgroundColor: '#dfdfdf',
    marginBottom: 10
  },
  card_content: {
    marginTop: 10
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10
  }
})

export default App
