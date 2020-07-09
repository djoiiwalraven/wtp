import {decode, encode} from 'base-64';

if (!global.btoa) {  global.btoa = decode }

if (!global.atob) { global.atob = encode }

console.log("REFRESHED()");
console.log(btoa('GRBoQgLhtLXlgIA='));
console.log(btoa('GRBoQgKB9LW1'));
console.log(atob('hello world'));

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoadingScreen from './src/screens/loadingScreen';
import LoginScreen from './src/screens/loginScreen';
import HomeScreen from './src/screens/homeScreen';

export default createAppContainer(
  createSwitchNavigator({
    LoadingScreen,
    LoginScreen,
    HomeScreen
  })
);


/*
main color: '#46d'
*/
