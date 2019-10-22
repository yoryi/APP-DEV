import React from 'react';
import {Image, Platform, ScrollView,Button, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";

//Dimensiones del dispositivo
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//imagenes
import Notificaciones_icon from '../../assets/images/notificaciones.png'

//importacion de constantes
import Color from '../../Constants/colores';
import Texto from '../../Constants/Texto';


export default class InicioScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


  render() {
    return (

    <View style={styles.NavBar}>
      

    </View>
     
    )}};
  

const styles = StyleSheet.create({
  
  NavBar: {
    //flexDirection: 'column',
    height: '2%',
    width: width,
    //backgroundColor: 'white',
    },

});
