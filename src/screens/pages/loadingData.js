import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';


export default function LoadingData(props) {
  return(
    <View style={styles.container}>
      <ActivityIndicator size='large' color='#46d' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
