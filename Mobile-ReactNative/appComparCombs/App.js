import React, { Component } from 'react';
import { Text, View, SafeAreaView,Image, TextInput, Pressable } from 'react-native';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      vlrGasolina: '',
      vlrEtanol: '',
      resultado:''
    }

    this.verificar = this.verificar.bind(this);
  }

  verificar(){
    if ((this.state.vlrGasolina === '') || (this.state.vlrEtanol ==='')) {
      alert('Insira os dois valores')
      return;     
    } else{
      var r = this.state.vlrEtanol / this.state.vlrGasolina
      if (r < 0.7) {
        this.setState({ resultado: 'Abasteça com Etanol'})
      } else {
        this.setState({ resultado: 'Abasteça com Gasolina' })
      }
    }
    }

    render() {
      return (
        <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
          <View style={{flexDirection: 'column', alignItems: 'center', marginTop: 50}}>
            <Text style={{fontSize: 50, fontWeight: 'bold', color: '#f00'}}>Etanol ou Gasolina</Text>
            <Image style={{width: 250, height: 250, marginTop: 20}} source={require('./assets/frame1.png')}/>
          </View>

          <View style={{alignItems: 'center', padding: 30, flexDirection: 'column'}}>
            <TextInput 
            style={{fontSize: 16 , borderWidth: 1, padding: 10, width: 180, marginBottom: 30, borderRadius: 10}}
            placeholder = ' Digite o preço do Etanol' 
            onChangeText={(texto) => this.setState({vlrEtanol: texto})}
            />

            <TextInput
            style={{fontSize: 16,  borderWidth: 1, padding: 10, width: 180, marginBottom: 30, borderRadius: 10}}
            placeholder = ' Digite o preço da Gasolina' 
            onChangeText = {(texto) => this.setState({vlrGasolina: texto})}
            />

          </View>

          <Pressable onPress={this.verificar} style={{ backgroundColor: '#00f', justifyContent: 'center' , alignItems: 'center', width: 150, height: 50, borderRadius: 15}}>
              <Text style={{color: '#eee', fontSize: 20, fontWeight: 'bold', textTransform: 'uppercase'}}>Verificar</Text>
            </Pressable>

            <Text style={{fontSize: 30, fontWeight: 'bold', marginTop: 40}}>{this.state.resultado}</Text>

        </SafeAreaView>
      )
    }
  }
export default App;