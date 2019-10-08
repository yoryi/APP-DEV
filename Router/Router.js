import React, { Component, View, Image,Text } from 'react';
import { Router, Scene} from 'react-native-router-flux';

//vistas principales
import Inicio from '../Screen/InicioScreen'


//vistas segundarias


const App = () => {
  return (
    <Router >
    <Scene key="root">
    <Scene
      key="Inicio"
      component={Inicio}
      type='reset'
      hideNavBar 
      initial
    />
  
  
    </Scene>
    </Router>
  );
}
 
export default App;