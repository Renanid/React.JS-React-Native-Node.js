import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
    container:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    textContador:{
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: 250,
      borderRadius: 10,
      textAlign: 'center',
    },
    btn: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00f',
      padding: 10,
      width: 65,
      height: 65,
      marginTop: 50,
      borderRadius: 50,
      },
      textBtn:{
        fontSize: 35,
        color: '#eee',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      titleText:{
        position: 'absolute', 
        top: 100, 
        left: 50, 
        fontSize: 36, 
        fontWeight: 'bold'
      }
   
  });
 
  export {styles};