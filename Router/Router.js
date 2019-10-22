import React, { Component, View, Image,Text } from 'react';
import { Router, Scene} from 'react-native-router-flux';

//vistas principales
import Inicio from '../Screen/InicioScreen'
import Perfil from '../Screen/PerfilScreen'
import Notificaciones from '../Screen/NotificacionesScreen'
import Examen from '../Screen/ExamenScreen'
import Codigo from '../Screen/CodigoScreen'


//vistas segundarias
import Diseño from '../Screen/DiseñoScreen'
import Desarrollo from '../Screen/DesarrolloScreen'
import Basedatos from '../Screen/BasedatosScreen'


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

    <Scene
      key="Diseño"
      component={Diseño}
      type='reset'
      hideNavBar   
      direction="vertical"
    />

    <Scene
      key="Desarrollo"
      component={Desarrollo}
      type='reset'
      hideNavBar   
    />

    <Scene
      key="Basedatos"
      component={Basedatos}
      type='reset'
      hideNavBar  
    />

    <Scene
      key="Perfil"
      component={Perfil}
      type='reset'
      hideNavBar  
    />

    <Scene
      key="Notificaciones"
      component={Notificaciones}
      type='reset'
      hideNavBar  
    />

    <Scene
      key="Examen"
      component={Examen}
      type='reset'
      hideNavBar  
    />

    <Scene
      key="Codigo"
      component={Codigo}
      type='reset'
      hideNavBar  
    />
  
    </Scene>
    </Router>
  );
}
 
export default App;