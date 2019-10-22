import React from 'react';
import {Image, StyleSheet,Text,TouchableOpacity,View,} from 'react-native';
import { Dimensions } from "react-native";
import { Actions } from 'react-native-router-flux';

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
    <View style={styles.Contenedor}>
    <TouchableOpacity style={styles.boton} onPress={() => Actions.Codigo()}>

    <Image source={Perfil} style={styles.icono}/>
 
    <View style={styles.Textos}>
    <Text style={styles.Titulo}>Codigo</Text>
    <Text style={styles.Subtitulo}>Promocial</Text>
    </View>

    </TouchableOpacity>
    </View>
)}};
  

const styles = StyleSheet.create({
  
    Contenedor: {
      flexDirection: 'row',
      height: '25%',
      width: '100%',
      alignItems: 'center',
      width: width,
      //backgroundColor: 'red',
      paddingLeft: '3%',
      paddingRight: '5%',
      //marginTop: '3%'
      marginTop: '1%'
      },

    Textos: {
      //position: 'absolute',
      flexDirection: 'column',
      height: '100%',
      width: '70%',
      //backgroundColor: 'yellow',
      justifyContent: 'center',
      //marginTop: '2%'

      },
      
    boton: {
      flexDirection: 'row',
      height: '90%',
      width: '80%',
      backgroundColor: Color.Promociones,
      justifyContent: 'center',
      alignItems: 'center',
      //marginTop: '2%',
      //paddingRight: '2%',
      borderRadius: 10,
      paddingLeft: '3%',
      },

    icono: {
      height: Texto.Perfil,
      width: Texto.Perfil,
      },

    Titulo: {
      fontSize: Texto.Btn_Titulo,
      fontWeight: "bold",
      color: Color.Btn_Titulos,
      paddingLeft: '7%',
      }, 

    Subtitulo: {
      fontSize: Texto.Btn_Subtitulo,
      color: Color.Btn_Subtitulos,
      paddingLeft: '7%',
      top: '-2%',
      
      },   

});