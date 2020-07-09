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


export default function IconButton(props) {

  const liked = props.liked;

  handleSmallAnimatedIconRef = (ref) => {
    this.handleSmallAnimatedIcon = ref;
  }

  animateIcon = () => {
    liked = props.liked;
  }

  return(
    <TouchableOpacity style={[styles.button,props.style]} onPress={props.click}>
      <Image style={{height: 30, width: 30}} source={props.source}/>
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
});

//


/*
<AnimatedIcon
  ref={this.handleSmallAnimatedIconRef}
  name={liked ? 'heart' : 'hearto'}
  //color={liked ? colors.heartColor : colors.textPrimary}
  size={18}
  style={styles.icon}
/>
*/
