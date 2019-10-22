import React from 'react';
import {Image, FlatList, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import Swipers from 'react-native-swiper';
import Texto from '../../Constants/Texto';

//componentes
import Curso from './curso';
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
        />
        <Curso
        Titulo="Desarrollo"
        Fondo={require('../../assets/images/desarrollo.jpg')}
        />
        </View>

        <View style={styles.slider}>
        <Espacio/>
        <Curso
        Titulo="Base datos"
        Fondo={require('../../assets/images/desarrollo.jpg')}
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
