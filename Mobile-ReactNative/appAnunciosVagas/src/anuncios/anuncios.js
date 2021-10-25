import React, {Component} from 'react'
import { View, FlatList } from 'react-native'
import {styles} from '../anuncios/styles'

import Vagas from '../vagas/vagas'

export default class Anuncios extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vagas:[
                {
                    id: 1, vaga: 'Desenvolvedor FrontEnd ReactJS JUNIOR', salario: 3000.00,
                    dsVaga: 'Empresa especializada em Portaria Remota para condomínios, com mais de 20 no mercado',
                    contato: 'Tel.: (11) 99421-0210 E-mail: vagafront1@vaga.com.br'
                },
                {
                    id: 2, vaga: 'Desenvolvedor BackEnd PLENO', salario: 3500.00,
                    dsVaga: 'Empresa especializada em Softwares para hospitais, com 5 anos no mercado',
                    contato: 'Tel.: (11) 3359-2315 E-mail: vagabackend1@vaga.com.br'
                },
                {
                    id: 3, vaga: 'UX Designer SENIOR', salario: 6169.50,
                    dsVaga: 'Empresa do ramo de Desginer, que tem como objetivo fazer protótipos de tela.',
                    contato: 'Tel.: (13) 99205-3122 E-mail.: vgauxdesigner@vaga.com.br'
                },
                {
                    id: 4, vaga: 'Desenvolvedor FrontEnd PHP PLENO', salario: 2500.00,
                    dsVaga: 'Empresa especializada em Portaria Remota para condomínios, com mais de 20 no mercado',
                    contato: 'Tel.: (11) 99421-0210 E-mail: vagafront2@vaga.com.br'
                },
                {
                    id: 5, vaga: 'Desenvolvedor JAVA SENIOR', salario: 6393.04,
                    dsVaga: 'Empresa internacional especializada em Jogos Digitais para multiplas plataformas, com 15 anos no mercado',
                    contato: 'Tel.: (11) 3359-2315 E-mail: vagabackend2@vaga.com.br'
                },
                {
                    id: 6, vaga: 'UX Research JUNIOR', salario: 2151.59,
                    dsVaga: 'Empresa do ramo de Desginer, que tem como objetivo fazer protótipos de tela, com mais de 20 anos no mercado',
                    contato: 'Tel.: (13) 99205-3122 E-mail.: vgauxdesigner@vaga.com.br'
                }
            ]
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                data={this.state.vagas}
                vertical={true}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({item})=> <Vagas data={item} />}
                />
            </View>
        )
    }
}
