import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Meu profile</Text>
        </View>
        <View style={styles.areaImg}>
          <MeuPerfil largura={150} altura={150} nome="Renan de Araujo" />
        </View>
        <Text style={styles.label}>Dados Pessoais</Text>
        <View style={styles.dados}>
          <Text style={styles.textPrincipal}>
            22 anos - Estudante - Santos-SP 
          </Text>
        </View>
        <Text style={styles.label}>Formação</Text>
        <View style={styles.dados}>
          <Text style={styles.textPrincipal}>
            Cursando ADS - UNIP
          </Text>
        </View>
        <Text style={styles.label}>XP</Text>
        <View style={styles.dados}>
          <Text style={styles.textPrincipal}>
            Accenture Brazil - Analista JR - Current Job
          </Text>
        </View>
        
    
        <StatusBar style="auto" />
      </View>
    )
  }
}

class MeuPerfil extends Component {
  render() {

    let img = 'https://i.ytimg.com/vi/xiLOYVskx44/maxresdefault.jpg'
    return(
      <View style={styles.areaImg}>
        <Image 
        source={{ uri: img }}
        style={{width:this.props.largura, height:this.props.altura, borderRadius: 150, borderWidth: 5, borderColor: "#90f"}}/>
        <Text style={styles.myName}>{this.props.nome}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#333'
  },
  header: {
    width: '100%',
    height: '15%',
    backgroundColor: '#90f',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderBottomWidth: 20,
    borderBottomColor: '#50f'
  },
  textHeader:{
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
    marginTop: 10,
    color: '#eee'
  },
  areaImg: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  myName: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#eee',
    marginTop: 25,
  },
  label:{
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#90f',
    marginTop: 15,
    marginBottom: 10
  },
  dados: {
    borderColor: '#90f',
    borderWidth: 2,
    borderRadius: 15,
    width: '80%',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textPrincipal: {
    color: '#eee',
    fontSize: 18,
    textAlign: 'center',
  }
})