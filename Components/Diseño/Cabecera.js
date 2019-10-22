import React from 'react';
import {Image, StyleSheet,Text,TouchableOpacity,View,} from 'react-native';
import { Dimensions } from "react-native";

//Dimensiones del dispositivo
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//imagenes
import Notificaciones from '../../assets/images/notificaciones.png'

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
    <Text style={{fontSize: Texto.titulo, color: Color.principal, textAlign: 'left',fontWeight:'bold'}}>Diseño</Text> 
    <Text style={{fontSize: Texto.nombre, color: Color.segundario, textAlign: 'left', marginTop: '-2%'}}>3 Cursos disponibles</Text>  
    </View>
  
    </View>

)}};
  

const styles = StyleSheet.create({
  
    Cabecera: {
      flexDirection: 'row',
      height: '15%',
      width: '100%',
      alignItems: 'center',
      width: width,
      //backgroundColor: 'red',
      },

    nombres: {
      flexDirection: 'column',
      height: '100%',
      width: '70%',
      paddingLeft: '15%',
      //backgroundColor: 'black',
      justifyContent: 'center',

      },

    boton: {
      height: '100%',
      width: '30%',
      //backgroundColor: 'yellow',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingRight: '5%',
      paddingTop: '2%',
      },

    icono: {
      height: Texto.Notificacion,
      width: Texto.Notificacion,
      },

});
