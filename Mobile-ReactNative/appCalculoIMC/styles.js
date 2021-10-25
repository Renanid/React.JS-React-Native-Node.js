import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    Header: {
        backgroundColor: '#00f',
        height: '15%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader:{
        fontSize: 35,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#eee',
        letterSpacing: 5
    },
    imagem:{
        height:200, 
        width: 200, 
        overflow: 'hidden',
        marginBottom: 40,
    },
    boxImput:{
        height: 200, 
        width: '100%',
        justifyContent: 'center', 
        alignItems: 'center',
        marginBottom: 30
    },
    input:{
        borderBottomWidth: 2, 
        fontSize: 20, 
        width: 250, 
        paddingBottom: 15,
        marginBottom: 40
    },
    botao:{
        width: 180,
        height: 50, 
        backgroundColor: '#daa521', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 15,
        marginBottom: 15
    },
    textResultado:{
        fontSize: 25, 
        padding: 50,
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center'
    }

})

export {styles};