import React from 'react';
import {Image, StyleSheet,Text,TouchableOpacity,View,} from 'react-native';
import { Actions } from 'react-native-router-flux'; 
import { Dimensions } from "react-native";

//Dimensiones del dispositivo
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//imagenes
import Perfil from '../../assets/images/perfil.png'

//importacion de constantes
import Color from '../../Constants/colores';
import Texto from '../../Constants/Texto';

export default class Cabecera extends React.Component {
  static navigationOptions = {
    header: null,
  };

render() {
    return (
    <View style={styles.Cabecera}>

    <View style={styles.nombres}>
    <Text style={{fontSize: Texto.Numeral, color: Color.terciarios, textAlign: 'left', fontWeight:'bold'}}>#12</Text> 
    <Text style={{fontSize: Texto.Dev, color: Color.segundario, textAlign: 'left', marginTop: '-2%'}}>Dev</Text>  
    </View>

    <View style={styles.boton}>
    <TouchableOpacity onPress={() => Actions.Perfil()}>
    <Image source={Perfil} style={styles.icono}/>
    </TouchableOpacity>
    </View>
      
  
    </View>

)}};
  

const styles = StyleSheet.create({
  
    Cabecera: {
      flexDirection: 'row',
      height: '9%',
      width: '100%',
      alignItems: 'center',
      width: width,
      //backgroundColor: 'red',
      paddingLeft: '3%',
      paddingRight: '3%',
      marginTop: '3%'
      },

    nombres: {
      flexDirection: 'column',
      height: '100%',
      width: '70%',
      //backgroundColor: 'black',
      justifyContent: 'center',
      marginTop: '2%'

      },

    boton: {
      height: '100%',
      width: '30%',
      //backgroundColor: 'yellow',
      justifyContent: 'center',
      alignItems: 'flex-end',
      marginTop: '2%',
      paddingRight: '2%',
      },

    icono: {
      height: Texto.Perfil,
      width: Texto.Perfil,
      },

});
