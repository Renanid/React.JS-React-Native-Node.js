import React, {Component} from "react";
import { styles } from './styles';
import {View, Text, TextInput, Pressable} from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            n1: '',
            n2: '',
            resultado: ''
        }

        this.calcular =  this.calcular.bind(this);
    }

    calcular(){
        if ((this.state.n1 === '') || (this.state.n2 === '')){
            alert('Digite os dois numeros')
            return
        } else {
            var r = this.state.n1 * this.state.n2
            this.setState({resultado: 'Resutado é:'+ r})
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                  <Text style={styles.textHeader}>Multiplicador de 2 Numeros</Text>
                </View>

                <TextInput
                style={styles.input}
                placeholder="Digite o 1° numero..."
                onChangeText = {(texto) => this.setState({n1: texto})} 
                />

                <TextInput
                style={styles.input}
                placeholder="Digite o 2° numero..."
                onChangeText = {(texto) => this.setState({n2: texto})} 
                />

                <Pressable style={styles.btn} onPress={this.calcular}>
                  <Text styles={styles.textoBotao}>Calcular</Text>
                </Pressable>

                <Text style={styles.textoPrincipal}>{this.state.resultado}</Text>
            </View>
        )
    }
}

export default App;
