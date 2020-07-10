import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

let cities = [
  'Heel Nederland',
  'Enschede',
  'Hengelo',
  'Amsterdam',
  'Deventer',
  'Utrecht',
  'Apeldoorn',
  'Hilversum',
  'Groningen',
  'Zwolle',
  'Den Haag',
  'Rotterdam',
  'Eindhoven',
  'Tilburg',
  'Breda',
  'Almere',
  'Haaksbergen',
  'Delft',
  'Alkmaar',
  'Middelburg'
];

export default function Location(props) {
  const CityButtons = cities.map((city, i , arr) =>{
    if(i === arr.length - 1){
      return(
        <View key={city}>
          <TouchableOpacity style={styles.box} onPress={() => props.setLoc(city)}>
            <Text>{city}</Text>
          </TouchableOpacity>
        </View>
      )
    }else if(i === 0){
      return(
        <View key={city}>
          <TouchableOpacity style={styles.box} onPress={() => props.setLoc(city)}>
            <Text style={styles.bold}>{city}</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>
        </View>
      )
    }else{
      return(
        <View key={city}>
          <TouchableOpacity style={styles.box} onPress={() => props.setLoc(city)}>
            <Text>{city}</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>
        </View>
      )
    }
  });

  return(
  <View style={styles.wrapper}>


    <ScrollView>
      {CityButtons}
    </ScrollView>
  </View>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 1,
    position: 'absolute',
    top: '0%',
    left: '50%',
    height: '80%',
    width: '50%',
    backgroundColor: '#fff',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,

  },
  box: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    marginLeft: 20
  },
  separator: {
    left: '10%',
    width: '80%',
    height: 1,
    backgroundColor: '#ccc',
  },
  bold: {
    fontWeight: 'bold',
  }
});

/*



















*/
