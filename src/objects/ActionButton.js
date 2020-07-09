'use strict';

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import styles from '../styles/styles';

export default class ActionButton extends Component {
  render() {
    return (
      <View style={styles.action}>
        <TouchableHighlight
          underlayColor={styles.action.backgroundColor}
          onPress={this.props.onPress}>
          <Text style={styles.actionText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
};
