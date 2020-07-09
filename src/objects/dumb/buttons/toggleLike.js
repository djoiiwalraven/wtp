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

import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/AntDesign';

const AnimatedIcon = Animatable.createAnimatableComponent(Icon);

const colors = {
  transparent: 'transparent',
  white: '#fff',
  heartColor: '#e92f3c',
  textPrimary: '#515151',
  black: '#000',
}

export default function IconButton(props) {

  const liked = props.liked;

  handleSmallAnimatedIconRef = (ref) => {
    this.handleSmallAnimatedIcon = ref;

  }

  return(
    <TouchableOpacity style={[styles.button,props.style]} onPress={props.click}>
      <AnimatedIcon
        ref={this.handleSmallAnimatedIconRef}
        name={liked ? 'heart' : 'hearto'}
        color={liked ? colors.heartColor : colors.textPrimary}
        size={30}
        style={styles.icon}
      />
    </TouchableOpacity>
  )
};




const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animatedIcon: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    borderRadius: 160,
    opacity: 0
  },
})
