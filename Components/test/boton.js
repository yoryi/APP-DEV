import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';


import Swipers from 'react-native-swiper';
import Color from "../../Constants/colores";
import Texto from '../../Constants/Texto';



//imagenes
import foto1 from '../../assets/images/desarrollo.jpg'; 
import foto2 from '../../assets/images/desarrollo.jpg'; 

//componentes



export default class curso extends Component {
  render(){
    return (
      
    
      <TouchableOpacity  onPress={this.props.boton} style={styles.Caja}>

      </TouchableOpacity>

     
     
    );
  }
}

const styles = StyleSheet.create({

  Caja: {
    height: '95%', 
    width: '50%',
    backgroundColor: 'red',
    borderRadius: 10,
    marginRight: '2%'
    
  },

})

AppRegistry.registerComponent('myproject', () => Swiper);