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
import ToggleLike from './buttons/toggleLike';

export default function EventCard(props) {
  return(
    <View style={[styles.button,props.newStyle]} onPress={props.click}>

      <View style={{width: '100%', flex: 3}}>

      </View>

      <View style={{width: '100%', flex: 1, padding: '5%',}}>
        <Text style={styles.titel}>{props.title}</Text>
        <Text style={styles.subTitel}>{props.location}</Text>
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
          click={() => console.log('share event')}
          source={require('../../../assets/images/icons/share.png')}
        />
        <ToggleLike
          style={{flex: 1}}
          click={props.toggleLikeEvent}
          liked={props.liked}
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
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
    backgroundColor: '#fff',
    borderTopWidth: 0,
  },
  titel: {
    color: '#000',
    fontSize: 26,
    fontFamily: 'titelFont',
  },
  subTitel: {
    color: '#777',
    fontSize: 20,
    fontFamily: 'subTitelFont',
  }
});
