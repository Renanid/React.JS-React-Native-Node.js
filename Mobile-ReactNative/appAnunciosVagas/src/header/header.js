import React, { Component } from 'react'
import { View, Text } from 'react-native'

import {styles} from '../header/styles'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Vagas de T.I.</Text>
                <Text style={styles.subTitulo}>Entre em contato o recrutador da vaga escolhida</Text>
            </View>
        )
    }
}