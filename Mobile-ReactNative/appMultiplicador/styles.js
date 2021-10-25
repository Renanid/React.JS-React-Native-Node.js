import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    header:{
        position: 'relative',
        backgroundColor: '#f00',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 100,
        top: 30
    },
    textHeader:{
        fontWeight: 'bold',
        fontSize: 35,
        color: '#eee',
    },
    input:{
        width: 190 ,
        marginTop: 100,
        borderBottomColor: '#111',
        borderBottomWidth: 1,
        fontSize: 20,
        textAlign: 'center'
    },
    btn:{
        width: 150,
        height: 50,
        marginTop: 100,
        backgroundColor: '#0f0',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotao:{
        fontSize: 20,
        color: '#eee',
        textAlign: 'center',

    },
    textoPrincipal:{
        fontSize: 20,
        marginTop: 50
    }
})

export {styles};