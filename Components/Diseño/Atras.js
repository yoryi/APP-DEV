import React from 'react';
import {Image, Platform, ScrollView,Button, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";
import Texto from '../../Constants/Texto';
import { Actions } from 'react-native-router-flux'; 

//Dimensiones del dispositivo
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//imagenes
import Atras from '../../assets/images/atras.png'


export default class InicioScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (

    <View style={styles.NavBar}>
    <TouchableOpacity style={styles.Boton} onPress={()=>Actions.Inicio()}>
    <Image source={Atras} style={styles.icono}/>
    </TouchableOpacity>

    </View>
     
    )}};
  

const styles = StyleSheet.create({
  
  NavBar: {
    flexDirection: 'column',
    height: '9%',
    width: width,
    //backgroundColor: 'yellow',
    },

  icono: {
    height: Texto.atras,
    width: Texto.atras,
    }, 

  Boton: {
    paddingTop: '11%',
    paddingLeft: '3%',
    },  

});
