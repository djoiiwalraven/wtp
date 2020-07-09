import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';

import IconButton from './buttons/iconButton';

export default function SearchBar(props) {
  return(

      <View style={styles.searchBar}>
        <View
          style={{backgroundColor: '#fff'}}
          width='10%'
        />
        <TextInput
          value={props.searchValue}
          placeholder='search events'
          style={styles.textInput}
          onChangeText={value => props.updateSearch(value)}
        />
        <IconButton
          click={props.close}
          source={props.xIMG}
          width='60%'
        />
      </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    position: 'absolute',
    backgroundColor: '#eee',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textInput: {
    height: '100%',
    flex: 3,
  }
});
