import React from 'react';
import {Image, FlatList, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//imagenes 
import Fondo  from '../assets/images/fondo-cursos.png' 

//componentes
import Atras  from '../Components/Desarrollo/Atras' 
import Cabecera  from '../Components/Desarrollo/Cabecera' 
import Item  from '../Components/Inicio/Item' 

export default class Inicioclinica extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (
      <ImageBackground resizeMode={"cover"} source={Fondo} style={styles.fondo}>
        <Atras/>
        <Cabecera/>
      </ImageBackground>
    )}};

 
const styles = StyleSheet.create({
  
  fondo:{
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    width: width,
    height: height,
    position: 'absolute',
    backgroundColor: '#FFFFFF' 
  },
  
});
