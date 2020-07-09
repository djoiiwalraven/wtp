import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ListView,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

import IconButton from './buttons/iconButton';

export default function CreateEventCard(props) {
  return(
    <View style={[styles.button,props.newStyle]} onPress={props.click}>

      <TouchableOpacity
        style={styles.banner}
        onPress={() => console.log('ADD BANNER')}
      >
        <Text style={styles.titel}>+</Text>
      </TouchableOpacity>

      <View style={{width: '100%', flex: 1}}>
        <TextInput
          multiline={false}
          value={props.titel}
          placeholder='Titel of event'
          style={styles.textInput}
          onChangeText={value => props.updateEvent(value, 'titel')}
        />
        <TextInput
          multiline={false}
          value={props.location}
          placeholder='Location of event'
          style={styles.textInput}
          onChangeText={value => props.updateEvent(value, 'location')}
        />
      </View>

      <View style={{width: '100%', flex: 1, flexDirection: 'row'}}>

        <IconButton
          style={{flex: 1}}
          click={() => console.log('ticket button')}
          source={require('../../../assets/images/icons/tag.png')}
        />
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Text>free entry</Text>
        </View>
        <IconButton
          style={{flex: 1}}
          click={() => console.log('ticket button')}
          source={require('../../../assets/images/icons/share.png')}
        />
        <IconButton
          style={{flex: 1}}
          click={() => console.log('ticket button')}
          source={require('../../../assets/images/icons/heart.png')}
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  button: {
    margin: '5%',
    marginBottom: 0,
    width: '90%',
    height: 380,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
	     width: 0,
	      height: 1,
      },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    borderWidth: 2,
    borderColor: '#eee'
  },
  titel: {
    color: '#46d',
    fontSize: 120,
    fontFamily: 'titelFont',
  },
  banner: {
    width: '100%',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  inputContainer: {
    margin: 20,
  },
  textInputDesc: {
    height: 180,
    textAlign: "left",
    color: "#333333",
    marginBottom: 20,
    fontSize: 24,
    borderBottomWidth: 2,
    borderBottomColor: "#111111"
  },
  textInput: {
    height: 30,
    textAlign: "left",
    color: "#333333",
    margin: 5,
    fontSize: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  }
});
