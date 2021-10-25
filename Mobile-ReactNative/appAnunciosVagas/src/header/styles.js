import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#b0f',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '25%',
        borderBottomWidth: 10,
        borderBottomColor: '#a0b'
    }, 
    titulo:{
        fontSize: 40,
        color: '#eee',
        letterSpacing: 5,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }, 
    subTitulo:{
        fontSize: 20,
        marginTop: 5,
        color: '#eee',
        paddingRight: 50,
        paddingLeft: 50,
        textAlign: 'center',
    }
})

export {styles}