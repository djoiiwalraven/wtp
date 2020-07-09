import React, { Component } from 'react';

//import dependencies
import {  SafeAreaProvider, useSafeArea } from 'react-native-safe-area-context';
import API from '../../backend/api';

//import objects
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ListView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import IconButton from '../../src/objects/dumb/buttons/iconButton';
import ScreensHOC from '../../src/HOC/pagesHOC';

import SearchBar from '../objects/dumb/searchBar';

//SVG icons
import CancelIMG from '../../assets/images/icons/cancel.png';
import EventIMG from '../../assets/images/icons/event.png';
import SearchIMG from '../../assets/images/icons/search.png';
import TagIMG from '../../assets/images/icons/tag.png';
import HeartIMG from '../../assets/images/icons/heart.png';
import UserIMG from '../../assets/images/icons/user-2.png';
import PinIMG from '../../assets/images/icons/pin.png';

import delayUnmounting from '../HOC/delay';
const HOCSearchBar = delayUnmounting(SearchBar);

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

//APP
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      eventCards: [],
      eventLikes: [],
      likesRecieved: false,
      page: 'loadingData',
      searchInput: '',
      searching: false,
      user: {
        id: '',
        name: '',
        firstName: '',
        lastName: '',
        email: '',
        ava: '',
      }
    }
  };

  _onUpdateSearch = (searchValue) => {
    this.setState({
      searchInput: searchValue,
    });
  }

  _onEmptySearch = () => {
    this.setState({
      searchInput: '',
    });
  }

  _onEventsReceived = (eventData) => {
    this.setState(prevState => ({loading: false}));
    this.setState({
      eventCards: eventData,
    });
    console.log('this._onEventsReceived(eventData): FINISHED');
  }

  _onLikesReceived = (likesData) => {
    this.setState(prevState => ({loading: false}));
    this.setState({
      eventLikes: likesData,
    });
    if(!this.state.likesRecieved){
      this.setState({page: 'events'});
      this.setState({likesRecieved: true});
    }
    console.log('this._onLikesReceived(likesData): FINISHED');
  }

  _onUserReceived = (userData) => {
    if(userData != null){
      let str = userData.displayName;
      let splited = str.split(" ");
      this.setState({
        user: {
          id: userData.uid,
          name: userData.displayName,
          firstName: splited[0],
          lastName: splited[splited.length - 1],
          email: userData.email,
          ava: userData.photoUrl,
        },
      });
    }
  }

  async componentDidMount() {
    this.setState(prevState => ({loading: true}));
    try {
      await API.getUserInfo(this._onUserReceived);
      await API.getEvents(this._onEventsReceived);
      await API.getLikes(this._onLikesReceived, this.state.user.email);
    } catch ( e ){
        console.log(e);
    }
  }

  toggleSearching = () => {
    this._onEmptySearch();
    this.setState( prevState => ({
      searching: !prevState.searching,
    }));
  }

  signOutUser = () => {
    API.userSigningOut();
  }

  goEventScreen = () => {
    this.setState({
      page: 'admin',
    })
  }

  onToggleLikeEvent = (user_email,event_id) => {
    API.toggleLike(user_email, event_id);
    this.handleRefresh();
  }

  handleRefresh = async () => {
    this.setState(prevState => ({loading: true}));
    //console.log(this.state.loading);
    console.log('refreshing');
    await API.getEvents(this._onEventsReceived);
    await API.getLikes(this._onLikesReceived, this.state.user.email);
    //console.log(this.state.loading);
    console.log('this.handleRefresh: FINISHED')
  }

  render() {

    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <SafeAreaTOP/>

          <View style={styles.header}>
            <View style={styles.titleDevider}>
              <Text style={styles.title}>Where'sTheParty</Text>
            </View>
            <View style={styles.pageDevider}>
              <Text style={styles.page}>{this.state.page}</Text>
            </View>



            <HOCSearchBar
              isMounted={this.state.searching}
              delay={1000}
              xIMG={CancelIMG}
              searchIMG={SearchIMG}
              updateSearch={(...props) => this._onUpdateSearch(...props)}
              searchValue={this.state.searchInput}
              close={this.toggleSearching}
            />
          </View>

          <View style={styles.PageContainer}>
            <ScreensHOC
              firstName={this.state.user.firstName}
              userEmail={this.state.user.email}
              data={this.state.eventCards}
              likes={this.state.eventLikes}
              page={this.state.page}
              signOut={() => this.signOutUser()}
              goEventScreen={() => this.goEventScreen()}
              onToggleLikeEvent={this.onToggleLikeEvent}
              find={this.state.searchInput}
              refreshing={this.state.loading}
              onRefresh={this.handleRefresh}
            />
          </View>


          <View  style={styles.footer}>
            <IconButton
              click={() => {
                console.log('refresh');
                this.setState({page: 'events'});
                API.getEvents(this._onEventsReceived);
              }}
              source={EventIMG}
            />
            <IconButton
              click={this.toggleSearching}
              source={SearchIMG}
            />
            <IconButton
              click={() => this.setState({page:'tickets'})}
              source={TagIMG}
            />
            <IconButton
              click={() => this.setState({page:'favorites'})}
              source={HeartIMG}
            />
            <IconButton
              click={() => this.setState({page:this.state.user.firstName})}
              source={UserIMG}
            />



          </View>
          <SafeAreaBOT/>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: '100%',
  },
  header: {
    flex: 1,
    borderBottomColor: '#ccc',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative'
  },
  footer: {
    flex: 1,
    borderTopColor: '#ccc',
    borderTopWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  PageContainer: {
    flex: 10,
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
    fontSize: 24,
    fontFamily: 'headerFont',
  },
  page: {
    color: '#444',
    fontSize: 18,
    fontFamily: 'subTitelFont',
  },
  button: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
