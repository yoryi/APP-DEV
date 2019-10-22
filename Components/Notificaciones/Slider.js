import React from 'react';
import {Image, FlatList, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux'; 
import Swipers from 'react-native-swiper';
import Texto from '../../Constants/Texto';

//componentes
import Curso from './Curso';
import Espacio from '../../Components/Inicio/EspacioX';

export default class Slider extends React.Component {
  static navigationOptions = {
    header: null,
  };

render() {
  return (
    <View style={styles.Contenedor}>
    <Swipers showsButtons={false} showsPagination={false} loop={false}>

        <View style={styles.slider}>
        <Espacio/>
        <Curso
        Titulo="Diseño"
        Fondo={require('../../assets/images/desarrollo.jpg')}
        Boton={() => Actions.Diseño()}

        />
        <Curso
        Titulo="Desarrollo"
        Fondo={require('../../assets/images/desarrollo.jpg')}
        Boton={() => Actions.Diseño()}
        />
        </View>

        <View style={styles.slider}>
        <Espacio/>
        <Curso
        Titulo="Base datos"
        Fondo={require('../../assets/images/desarrollo.jpg')}
        Boton={() => Actions.Diseño()}
        />
        </View>

  </Swipers>
  </View>
)}};

 
const styles = StyleSheet.create({
  
  Contenedor: {
     height: Texto.Slideralto, 
    },

  slider: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: '2%',
  },
});