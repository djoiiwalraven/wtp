import React from 'react';

//import dependencies
import {  SafeAreaProvider, useSafeArea } from 'react-native-safe-area-context';
import API from '../../backend/api';

import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

//SafeAreaFunctions
function SafeAreaTOP() {
  const safeArea = useSafeArea();
  return(
    <View style={{paddingTop: safeArea.top}}/>
  )
};

function SafeAreaBOT() {
  const safeArea = useSafeArea();
  return(
    <View style={{paddingTop: safeArea.bot}}/>
  )
};



export default function LoginScreen() {
  return(
    <SafeAreaProvider>
      <View style={styles.container}>
        <SafeAreaTOP/>

        <View style={styles.header}>
          <View style={styles.titleDevider}>
            <Text style={styles.title}>Where'sTheParty?</Text>
          </View>
          <View style={styles.pageDevider}>
            <Text style={styles.page}>Login</Text>
          </View>
        </View>

        <View style={styles.PageContainer}>
          <Button title='Sign In With Google' onPress={() => console.log(API.signInWithGoogleAsync())} />
        </View>

        <View style={styles.footer}>

        </View>

        <SafeAreaBOT/>
      </View>
    </SafeAreaProvider>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: '100%',
  },
  header: {
    flex: 1,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative'
  },
  footer: {
    flex: 1,
    borderTopColor: '#eee',
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  PageContainer: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleDevider: {
    height: '100%',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageDevider: {
    flex: 2,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 22,
    fontFamily: 'headerFont',
  },
  page: {
    color: '#444',
    fontSize: 22,
    fontFamily: 'subTitelFont',
  }
});
