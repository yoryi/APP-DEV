import React from 'react';
import {Image, FlatList, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//Componentes


export default class Inicioclinica extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (
      <View style={styles.fondo}>
        <Text>hola </Text>
      </View>
    )}};

 
const styles = StyleSheet.create({
  
  fondo:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
    position: 'absolute',
    backgroundColor: '#FFFFFF' 
  },
  
});
