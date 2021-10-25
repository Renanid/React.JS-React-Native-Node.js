import React, {Component} from "react";
import { styles } from './styles';
import {View, Text, Pressable, Image} from 'react-native';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      numRandom: 0
    }
  
      this.rodar = this.rodar.bind(this)
  }

  rodar(){
    var NR = Math.floor(Math.random() * 10) + 1
    this.setState({numRandom: NR})
  }
  
  render(){
    return (
      <View style={styles.area}>
        <View style={styles.areaHeader}>
          <Text style={styles.textHeader}>Jogo dos N° Aleatórios</Text>
        </View>
        <Image style={styles.img} source={require('./assets/charada.png')}/>

        <Text style={styles.textDesafio}>Pense em um N° de 0 a 10</Text>
        <View style={styles.areaRandom}>
          <Text style={styles.textRandom}>{this.state.numRandom}</Text>
        </View>
        <Pressable onPress={this.rodar} style={styles.button}>
          <Text style={{fontSize: 25, textAlign: 'center', letterSpacing: 5, color: '#0f0', textTransform: 'uppercase', fontWeight: 'bold'}}>Rodar</Text>
        </Pressable>
      </View>
    )
  }

}

export default App;