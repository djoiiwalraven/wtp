import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

import * as Font from 'expo-font';
import Svg, { Use, Image as Img } from 'react-native-svg';
import API from '../../backend/api';

export default class LoadingScreen extends Component {

  async componentDidMount(){
    await Font.loadAsync({
      'headerFont': require('../../assets/fonts/Courgette-Regular.ttf'),
      'titelFont': require('../../assets/fonts/Roboto-Bold.ttf'),
      'subTitelFont': require('../../assets/fonts/Roboto-Thin.ttf')
    });
    await API.checkIfLoggedIn(this.onLoginSuccess,this.onLoginFail);
    //this.props.navigation.navigate('LoginScreen');
  }

  onLoginSuccess = () => {
    this.props.navigation.navigate('HomeScreen');
  }

  onLoginFail = () => {
    this.props.navigation.navigate('LoginScreen');
  }

  render(){
    return(
      <View style={styles.container}>
        <ActivityIndicator size='large' color='#46d' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
