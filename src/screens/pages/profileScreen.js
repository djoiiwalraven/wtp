import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

export default function ProfileScreen(props) {
  return(
    <View style={styles.inputContainer}>
      <Button title='sign out' onPress={props.signOut} />
      <Button title='create new event' onPress={props.goEventScreen} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    height: '100%',
  }
});
