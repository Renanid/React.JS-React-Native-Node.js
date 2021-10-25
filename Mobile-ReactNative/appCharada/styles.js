import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    area:{
        flex: 1,
        alignItems: 'center',
    },
    areaHeader:{
        width: '100%',
        height: '15%',
        backgroundColor: '#92f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHeader:{
        fontSize: 25,
        marginTop: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        letterSpacing: 3,
        color: '#0f0'
    },
    img:{
        width: 250,
        height: 250,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textDesafio:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#92f',
        textAlign: 'center',
        padding: 15,
    },
    areaRandom:{
        marginTop: 20 ,
        backgroundColor: "#0f0",
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#92f',
        marginBottom: 20,
    },
    textRandom:{
        fontSize: 150,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#92f',
    },
    button:{
        marginTop: 20,
        backgroundColor: '#92f',
        width: 120,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    }
})

export {styles}