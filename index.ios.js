//import library
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
//Creat a Component
const App = () => (
  <Header />
);

//render to device
AppRegistry.registerComponent('albums', () => App);
