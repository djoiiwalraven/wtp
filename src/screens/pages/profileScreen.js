import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

import IoButton from '../../objects/dumb/buttons/ioButton';

export default function ProfileScreen(props) {
  return(
    <View style={styles.inputContainer}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Personal Information</Text>
        <Text style={styles.info}>user: ddwalraven</Text>
        <Text style={styles.info}>@: dd.walraven@gmail.com</Text>
        <Text style={styles.info}>Tell: +31637401229</Text>
        <Text style={styles.title}>Information we share</Text>
        <Text style={styles.info}>Djoï Walraven</Text>
        <Text style={styles.info}>Cake: 02/09/1997</Text>
        <Text style={styles.info}>Arrow: Male</Text>
        <Text style={styles.info}>Speaks: English & Dutch</Text>
      </View>
      <View style={styles.buttonContainer}>
        <IoButton styling={{backgroundColor: '#fff'}} title='sign out' click={props.signOut} />
        <IoButton styling={{backgroundColor: '#fff'}} title='create new event' click={props.goEventScreen} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    height: '100%',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 3,
    alignItems: 'flex-start',
    width: '80%',
  },
  buttonContainer: {
    flex: 1,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginTop: 36,
    marginBottom: 12,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 18,
    marginBottom: 5,
  }

});
//PROFILE       //PAYMENT METHOD
//Full name     //PayPal
//Username      //iDeal
//Email         //CreditCard
//Tell          //
//Birthday      //
//Sex           //
//Language      //
//Location      //
