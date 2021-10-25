import React, { Component } from 'react';
import { View, Text, Pressable} from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      contador: 0,
    };

    this.decrementar = this.decrementar.bind(this);

    this.incrementar = this.incrementar.bind(this);
  }

  decrementar(){

    if (this.state.contador === 0) {
      this.setState({contador:0})
    } else {
      this.setState({
      contador: this.state.contador - 1
    })
    }
  }

  incrementar(){
    this.setState({
      contador: this.state.contador + 1
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titleText}> Contador de Clientes</Text>
        <Pressable 
          style={styles.btn} 
          onPress={ this.decrementar }>
          <Text style={styles.textBtn}>-</Text>
        </Pressable>

        <Text style={styles.textContador}> {this.state.contador} </Text>
        
        <Pressable 
        style={styles.btn} 
        onPress={this.incrementar}>
          <Text style={styles.textBtn}>+</Text>
        </Pressable>  
      </View>
    );
  }
}
 
export default App;