import React, { Component } from 'react';
import {StyleSheet,View,Image,Text, TouchableOpacity} from 'react-native';

//Constantes
import Color from '../../Constants/colores';
import Texto from '../../Constants/Texto';

export default class Slider extends React.Component {
  render(){
    return (
      <View style={styles.contendor}>

      <View style={styles.Caja}>
      <Image  source={this.props.Fondo} style={styles.Foto}/>  
      
      <View style={styles.sombra}> 
      <TouchableOpacity onPress={this.props.Boton}>
      <Text style={styles.Texto}>{this.props.Titulo}</Text>
      </TouchableOpacity> 
      </View> 

      </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({

  contendor: {
    height: '95%', 
    width: '45%',
    //backgroundColor: 'red',
    borderRadius: 10,
    marginRight: '2%'
  },

  Caja: {
    height: '100%', 
    width: '100%',
    //backgroundColor: 'red',
    borderRadius: 10,
    marginRight: '2%'
  },
  sombra: {
    position: 'absolute',
    height: '100%' , 
    width: '100%' , 
    borderRadius: 10,
    backgroundColor: Color.Swiper,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: '7%',
  },
  Texto: {
    fontSize: Texto.titulo_Slider, 
    color: '#fff',
  },

  Foto: {
    width: '100%', 
    height: '100%', 
    borderRadius: 10
  },

})