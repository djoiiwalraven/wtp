import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';

import API from '../../../backend/api';
import CreateEventCard from '../../objects/dumb/createEventCard';

export default class AdminAddEventScreen extends Component {

  constructor(){
    super();
    this.state = {
      promo: '',
      titel: '',
      info: '',
      location: '',
      date: new Date('2020-06-12T14:42:42'),
      tickets: [],
      likes: 0,
    }
  }

  updateEvent = (value, stateType) => {
    console.log(value + ' : ' + stateType);
    this.setState(prevState => (
      {
        ...prevState,
        [stateType]: value,
      })
    );
  }

  pushNewEvent = () => {
    API.addEvent(this.state);
  };

  render(){

    return(
        <View style={styles.inputContainer}>
          <CreateEventCard
            updateEvent={this.updateEvent}
            titel={this.state.titel}
            promo={this.state.promo}
            info={this.state.info}
            location={this.state.location}
          />
          <Button title='add more info' onPress={() => console.log('ADD INFO')} />
          <Button title='add event' onPress={this.pushNewEvent} />
        </View>
    )
  }
}

const styles = StyleSheet.create({
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
    height: 40,
    textAlign: "left",
    color: "#333333",
    marginBottom: 20,
    fontSize: 24,
    borderBottomWidth: 2,
    borderBottomColor: "#111111"
  }
});


/*
<ScrollView>
  <TextInput
    multiline={true}
    value={this.state.titel}
    placeholder='Titel of event'
    style={styles.textInput}
    onChangeText={value => this.updateEvent(value, 'titel')}
  />
  <TextInput
    value={this.state.info}
    placeholder='Add information'
    style={styles.textInputDesc}
    onChangeText={value => this.updateEvent(value, 'info')}
    multiline
  />
  <TextInput
    value={this.state.location}
    placeholder='Location of event'
    style={styles.textInput}
    onChangeText={value => this.updateEvent(value, 'location')}
  />
  <TextInput
    multiline={true}
    value={this.state.titel}
    placeholder='Titel of event'
    style={styles.textInput}
    onChangeText={value => this.updateEvent(value, 'titel')}
  />
  <TextInput
    value={this.state.info}
    placeholder='Add information'
    style={styles.textInputDesc}
    onChangeText={value => this.updateEvent(value, 'info')}
    multiline
  />
  <TextInput
    value={this.state.location}
    placeholder='Location of event'
    style={styles.textInput}
    onChangeText={value => this.updateEvent(value, 'location')}
  />
  <TextInput
    multiline={true}
    value={this.state.titel}
    placeholder='Titel of event'
    style={styles.textInput}
    onChangeText={value => this.updateEvent(value, 'titel')}
  />
  <TextInput
    value={this.state.info}
    placeholder='Add information'
    style={styles.textInputDesc}
    onChangeText={value => this.updateEvent(value, 'info')}
    multiline
  />
  <TextInput
    value={this.state.location}
    placeholder='Location of event'
    style={styles.textInput}
    onChangeText={value => this.updateEvent(value, 'location')}
  />
  <Button onPress={this.pushNewEvent} title='ADD EVENT' color='#841584' />
</ScrollView>
*/
