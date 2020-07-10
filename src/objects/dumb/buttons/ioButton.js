import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

export default function IoButton(props) {
  return(
    <TouchableOpacity style={[styles.button,props.styling]} onPress={props.click}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: '32%',
    borderRadius: 6,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  title:{
    color: '#27f',
    fontSize: 20
  }
});
